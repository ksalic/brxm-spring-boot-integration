package org.onehippo.connect.proxy;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.component.HstURL;
import org.hippoecm.hst.core.container.AggregationValve;
import org.hippoecm.hst.core.container.ContainerConstants;
import org.hippoecm.hst.core.container.ContainerException;
import org.hippoecm.hst.core.container.HstComponentWindow;
import org.hippoecm.hst.core.container.HstContainerConfig;
import org.hippoecm.hst.core.container.ValveContext;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.pagemodelapi.v09.core.container.FlatAggregatedPageModel;
import org.springframework.http.MediaType;

public class FlatAggregatedPageValve extends AggregationValve {

    /**
     * <code>HstRequestContext</code> specific {@link FlatAggregatedPageModel} attribute name.
     */
    private static final String AGGREGATED_PAGE_MODEL_ATTR = FlatAggregatedPageValve.class.getName()
        + ".aggregatedPageModel";

    /**
     * Jackson ObjectMapper instance for JSON (de)serialization.
     */
    private final ObjectMapper objectMapper;


    public FlatAggregatedPageValve(final ObjectMapper objectMapperInput) {
        this.objectMapper = objectMapperInput;
    }

    /**
     * Return the current {@link FlatAggregatedPageModel} object.
     *
     * @return the current {@link FlatAggregatedPageModel} object
     */
    public static FlatAggregatedPageModel getCurrentAggregatedPageModel() {
        final HstRequestContext requestContext = RequestContextProvider.get();

        if (requestContext != null) {
            return (FlatAggregatedPageModel)requestContext.getAttribute(AGGREGATED_PAGE_MODEL_ATTR);
        }

        return null;
    }

    /**
     * Set the current {@link FlatAggregatedPageModel} object.
     *
     * @param aggregatedPageModel the current {@link FlatAggregatedPageModel} object
     */
    public static void setCurrentAggregatedPageModel(FlatAggregatedPageModel aggregatedPageModel) {
        final HstRequestContext requestContext = RequestContextProvider.get();

        if (requestContext == null) {
            throw new IllegalStateException("HstRequestContext is not available.");
        }

        requestContext.setAttribute(AGGREGATED_PAGE_MODEL_ATTR, aggregatedPageModel);
    }

    @Override
    protected void processWindowsRender(final HstContainerConfig requestContainerConfig,
                                        final HstComponentWindow[] sortedComponentWindows, final Map<HstComponentWindow, HstRequest> requestMap,
                                        final Map<HstComponentWindow, HstResponse> responseMap) throws ContainerException {
        final FlatAggregatedPageModel aggregatedPageModel = createFlatAggregatedPageModel(
            sortedComponentWindows, requestMap, responseMap);
        setCurrentAggregatedPageModel(aggregatedPageModel);
    }

    private FlatAggregatedPageModel createFlatAggregatedPageModel(final HstComponentWindow[] sortedComponentWindows, final Map<HstComponentWindow, HstRequest> requestMap, final Map<HstComponentWindow, HstResponse> responseMap) throws ContainerException {
        // root component (page component) is the first item in the sortedComponentWindows.
        final HstComponentWindow rootWindow = sortedComponentWindows[0];

        final FlatAggregatedPageModel aggregatedPageModel = new FlatAggregatedPageModel();

        final FlatComponentWindowModel pageWindowModel = new FlatComponentWindowModel(rootWindow);

        aggregatedPageModel.setPageWindowModel(pageWindowModel);

        final int sortedComponentWindowsLen = sortedComponentWindows.length;

        for (int i = 0; i < sortedComponentWindowsLen; i++) {
            final HstComponentWindow window = sortedComponentWindows[i];
            final HstRequest hstRequest = requestMap.get(window);
            final HstResponse hstResponse = responseMap.get(window);

            final FlatComponentWindowModel currentComponentWindowModel = aggregatedPageModel.getModel(window.getReferenceNamespace())
                .orElseThrow(() -> new ContainerException(
                    String.format("Expected window for '%s' to be present", window.getReferenceName())));


            addVariant(hstRequest, currentComponentWindowModel);
            addComponentRenderingURLLink(hstResponse, currentComponentWindowModel);

        }

        return aggregatedPageModel;
    }

    private void addVariant(final HstRequest hstRequest, final FlatComponentWindowModel currentComponentWindowModel) {
        HttpSession session = hstRequest.getSession();

        Object variant = session.getAttribute(ContainerConstants.RENDER_VARIANT);
        if (variant == null) {
            variant = ContainerConstants.DEFAULT_PARAMETER_PREFIX;
        }

        currentComponentWindowModel.setRenderVariant("");
    }

    /**
     * {@inheritDoc}
     * <p>
     * Overrides <code>AggregationValve#processWindowsRender()</code> to create an {@link FlatAggregatedPageModel}
     * from the current page request and write it as JSON output.
     */
    @Override
    protected void writeAggregatedOutput(final ValveContext context, final HstComponentWindow rootRenderingWindow)
        throws ContainerException {
        final HstRequestContext requestContext = RequestContextProvider.get();
        final FlatAggregatedPageModel aggregatedPageModel = getCurrentAggregatedPageModel();

        if (aggregatedPageModel == null) {
            throw new ContainerException("Page model cannot be null! Page model might not be aggregated for some reason in #processWindowsRender() for some reason.");
        }

        final HttpServletResponse response = requestContext.getServletResponse();

        try {
            response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
            response.setCharacterEncoding("UTF-8");
            response.setHeader(ContainerConstants.PAGE_MODEL_API_VERSION, "Awesomeness");

            getObjectMapper().writeValue(response.getWriter(), aggregatedPageModel);
        } catch (JsonGenerationException e) {
            throw new ContainerException(e.getMessage(), e);
        } catch (JsonMappingException e) {
            throw new ContainerException(e.getMessage(), e);
        } catch (IOException e) {
            log.warn("Failed to write aggregated page model in json.", e);
        } finally {
        }
    }

    /**
     * Adding componentRendering URL link to the linkable model.
     *
     * @param hstResponse   HstResponse
     * @param linkableModel linkable model
     */
    private void addComponentRenderingURLLink(HstResponse hstResponse,
                                              FlatComponentWindowModel linkableModel) {
        HstURL compRenderURL = hstResponse.createComponentRenderingURL();
        linkableModel.setComponentRendering(compRenderURL.toString());
    }


    public ObjectMapper getObjectMapper() {
        return objectMapper;
    }


}

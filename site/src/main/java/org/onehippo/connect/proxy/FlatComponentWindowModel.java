package org.onehippo.connect.proxy;

import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.hippoecm.hst.configuration.components.HstComponentConfiguration;
import org.hippoecm.hst.core.container.ContainerConstants;
import org.hippoecm.hst.core.container.HstComponentWindow;
import org.hippoecm.hst.pagemodelapi.v09.core.model.IdentifiableMetadataBaseModel;

public class FlatComponentWindowModel extends IdentifiableMetadataBaseModel {

    private final String END_TEMPLATE = "{ \"uuid\":\"%s\", \"HST-End\":\"true\"}";
    private String name;
    private String type;
    private String xtype;
    private String label;
    private Set<FlatComponentWindowModel> components;
    private String lastModified;
    private String uuid;
    private String componentRendering;
    private String renderVariant;

    public FlatComponentWindowModel(final HstComponentWindow window) {
        super(window.getReferenceNamespace());
        HstComponentConfiguration compConfig = ((HstComponentConfiguration)window.getComponentInfo());
        name = window.getName();
        type = window.getComponentInfo().getComponentType().toString();
        label = window.getComponentInfo().getLabel();
        xtype = window.getComponent().getComponentConfiguration().getXType();
        if (compConfig.getLastModified() != null) {
            lastModified = String.valueOf(compConfig.getLastModified().getTimeInMillis());
        }
        uuid = compConfig.getCanonicalIdentifier();

        final Map<String, HstComponentWindow> childComponentWindows = window.getChildWindowMap();

        if (!childComponentWindows.isEmpty()) {
            components = new LinkedHashSet<>();

            for (HstComponentWindow child : childComponentWindows.values()) {
                components.add(new FlatComponentWindowModel(child));
            }
        }





    }

    public FlatComponentWindowModel() {
        super(null);
    }

    @Override
    @JsonProperty("refNS")
    public String getId() {
        return super.getId();
    }

    @JsonProperty("HST-LastModified")
    public String getLastModified() {
        return lastModified;
    }

    public void setLastModified(final String lastModified) {
        this.lastModified = lastModified;
    }

    @JsonProperty("uuid")
    public String getUuid() {
        return uuid;
    }

    public void setUuid(final String uuid) {
        this.uuid = uuid;
    }

    @JsonProperty("url")
    public String getComponentRendering() {
        return componentRendering;
    }

    public void setComponentRendering(final String componentRendering) {
        this.componentRendering = componentRendering;
    }

    /**
     * @return the container item component's name.
     */
    @JsonIgnore
    public String getName() {
        return name;
    }

    /**
     * @return the component type, see {@link HstComponentConfiguration.Type}
     */
    @JsonProperty("HST-Type")
    public String getType() {
        return type;
    }

    /**
     * Return component's label. i.e. hst:label property value of an hst:containeritemcomponent.
     *
     * @return
     */
    @JsonProperty("HST-Label")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public String getLabel() {
        return label;
    }

    @JsonProperty("HST-XType")
    public String getXtype() {
        return xtype;
    }


    @JsonProperty("HST-Render-Variant")
    public String getRenderVariant() {
        return renderVariant;
    }

    @JsonProperty("HST-Render-Variant")
    public void setRenderVariant(final String renderVariant) {
        this.renderVariant = renderVariant;
    }

    @JsonIgnore
    public Set<FlatComponentWindowModel> getComponents() {
        return components;
    }

    public String startComment() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            // e.printStackTrace();
        }
        return null;
    }

    public String endComment() {
        return String.format(END_TEMPLATE, getUuid());
    }

}

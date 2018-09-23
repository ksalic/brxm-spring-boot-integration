package org.onehippo.connect.proxy;

import java.util.Arrays;
import java.util.Collection;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.NotAllowedException;

import com.bloomreach.pagemodel.api.model.ComponentModel;
import com.bloomreach.pagemodel.api.model.PageModel;
import com.fasterxml.jackson.databind.JsonNode;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.springframework.http.HttpMethod.GET;

public class PageModelServiceClient {

    public PageModel getPageModelForPreview(final String previewBaseUrl, final HttpServletRequest request, final String path) {
        HttpHeaders headers = new HttpHeaders();
        if (request.getCookies() == null) {
            throw new NotAllowedException("no cookies present");
        }
//        if (!jsessionid.isPresent()) {
//            throw new NotAllowedException("no jsession id set");
//        }
        Arrays.asList(request.getCookies()).stream().forEach(cookie -> headers.add("Cookie", cookie.getName() + "=" + cookie.getValue()));
        Enumeration<String> it = request.getHeaderNames();
        while (it.hasMoreElements()) {
            String headerName = it.nextElement();
            headers.add(headerName, request.getHeader(headerName));
        }
//        headers.add("Cookie", "JSESSIONID=" + jsessionid.get().getValue());
        RestTemplate template = new RestTemplate();
        ResponseEntity<PageModel> exchange = template.exchange(previewBaseUrl,
                GET,
                new HttpEntity<String>(headers),
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }

    public FlatComponentModelMap getFlatListModelForPreview(final String previewBaseUrl, final HttpServletRequest request, final String path) {
        PageModel pageModelForPreview = getPageModelForPreview(previewBaseUrl, request, path);
        FlatComponentModelMap listModel = convertFromPageModel(pageModelForPreview);
        return listModel;
    }

    public FlatComponentModelMap convertFromPageModel(final PageModel pageModel) {
        FlatComponentModelMap listModel = new FlatComponentModelMap();
        List<ComponentModel> components = pageModel.getPage().getComponents();
        Map<String, JsonNode> contentNode = pageModel.getContentNode();
        populateFlatComponentListModel(listModel, components);
        populateFlatContentListModel(listModel, contentNode);
        return listModel;
    }

    private void populateFlatContentListModel(final FlatComponentModelMap listModel, final Map<String, JsonNode> componentModels) {
        componentModels.entrySet().stream().filter(content -> content.getValue().has("_meta")).forEach(content -> {
            String key = content.getKey();
            JsonNode jsonContentNode = content.getValue();
            String contentComment = jsonContentNode.get("_meta").get("beginNodeSpan").get(0).get("data").asText();
            FlatComponentModel model = new FlatComponentModel();
            model.setId(key);
            model.setCommentStart(contentComment);
            listModel.putContent(key, model);
        });
    }

    public void populateFlatComponentListModel(final FlatComponentModelMap list, final Collection<ComponentModel> componentModels) {
        componentModels.stream()
                .forEach(componentModel -> {
                    if (componentModel.getMeta().getBeginNodeSpan() != null) {
                        list.putComponent(componentModel.getID(), createFromComponentModel(componentModel));
                    }
                    if (componentModel.getComponents() != null) {
                        populateFlatComponentListModel(list, componentModel.getNamedComponents().values());
                    }
                });
    }

    public FlatComponentModel createFromComponentModel(final ComponentModel componentModel) {
        FlatComponentModel model = new FlatComponentModel();
        model.setId(componentModel.getID());
        model.setCommentStart(componentModel.getMeta().getStart());
        if (componentModel.getMeta().getEndNodeSpan() != null) {
            model.setCommentEnd(componentModel.getMeta().getEnd());
        }
        return model;
    }
}

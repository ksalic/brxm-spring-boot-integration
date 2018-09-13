package org.onehippo.connect.proxy;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.ws.rs.NotAllowedException;

import com.bloomreach.pagemodel.api.model.ComponentModel;
import com.bloomreach.pagemodel.api.model.PageModel;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.springframework.http.HttpMethod.GET;

public class PageModelServiceClient {

    public PageModel getPageModelForPreview(final String previewBaseUrl, final Cookie[] cookies, final String path) {
        HttpHeaders headers = new HttpHeaders();
        if (cookies == null) {
            throw new NotAllowedException("no cookies present");
        }
        Optional<Cookie> jsessionid = Arrays.asList(cookies).stream().filter(cookie -> cookie.getName().equals("JSESSIONID")).findFirst();
        if (!jsessionid.isPresent()) {
            throw new NotAllowedException("no jsession id set");
        }
        headers.add("Cookie", "JSESSIONID=" + jsessionid.get().getValue());
        RestTemplate template = new RestTemplate();
        ResponseEntity<PageModel> exchange = template.exchange(previewBaseUrl,
                GET,
                new HttpEntity<String>(headers),
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }

    public FlatComponentModelMap getFlatListModelForPreview(final String previewBaseUrl, final Cookie[] cookies, final String path) {
        PageModel pageModelForPreview = getPageModelForPreview(previewBaseUrl, cookies, path);
        FlatComponentModelMap listModel = convertFromPageModel(pageModelForPreview);
        return listModel;
    }

    public FlatComponentModelMap convertFromPageModel(final PageModel pageModel) {
        FlatComponentModelMap listModel = new FlatComponentModelMap();
        ComponentModel[] components = pageModel.getPage().getComponents();
        List<ComponentModel> componentModels = Arrays.asList(components);
        populateFlatComponentListModel(listModel, componentModels);
        return listModel;
    }

    public void populateFlatComponentListModel(final FlatComponentModelMap list, final Collection<ComponentModel> componentModels) {
        componentModels.stream()
                .forEach(componentModel -> {
                    if (componentModel.getMeta().getBeginNodeSpan() != null) {
                        list.put(componentModel.getID(), createFromComponentModel(componentModel));
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

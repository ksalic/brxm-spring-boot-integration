package org.onehippo.connectapp.util;

import java.util.List;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bloomreach.pagemodel.api.model.ComponentModel;
import com.bloomreach.pagemodel.api.model.PageModel;

import org.onehippo.connectapp.service.PageModelResourceService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.WebUtils;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;

public class PageModelUtils {

    public static PageModel getPageModel(final String baseUrl, final HttpServletRequest req, final HttpServletResponse res) {
        Cookie visitor = WebUtils.getCookie(req, "_visitor");
        String visitorId = UUID.randomUUID().toString();
        if (visitor != null) {
            visitorId = visitor.getValue();
        } else {
            res.addCookie(new Cookie("_visitor", visitorId));
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cookie", "_visitor=" + visitorId);
        headers.add("User-Agent", req.getHeader("User-Agent"));
        RestTemplate template = new RestTemplate();
        ResponseEntity<PageModel> exchange = template.exchange(baseUrl,
                GET,
                new HttpEntity<String>(headers),
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }

    public static PageModel getPageModelForPreview(final String previewBaseUrl, final HttpServletRequest req, final HttpServletResponse res) {
        HttpHeaders headers = new HttpHeaders();
        Cookie jsessionId = WebUtils.getCookie(req, "JSESSIONID");
        Cookie visitor = WebUtils.getCookie(req, "_visitor");
        String visitorId = UUID.randomUUID().toString();
        if (jsessionId == null) {
            throw new UnauthorizedException("Not Authorized");
        }
        if (visitor != null) {
            visitorId = visitor.getValue();
        } else {
            res.addCookie(new Cookie("_visitor", visitorId));
        }
        headers.add("Cookie", "JSESSIONID=" + jsessionId.getValue());
        headers.add("Cookie", "_visitor=" + visitorId);
        headers.add("User-Agent", req.getHeader("User-Agent"));
        RestTemplate template = new RestTemplate();
        ResponseEntity<PageModel> exchange = template.exchange(previewBaseUrl,
                GET,
                new HttpEntity<String>(headers),
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }

    public static PageModel getFullPageModelForPreview(final String previewBaseUrl, final HttpServletRequest req, final HttpServletResponse res, final String ref, final String document, boolean partial) {
        PageModel pageModel = getPageModelForPreview(previewBaseUrl, req, res);
        if(partial){
            PageModel partialPageModelForPreview = getPartialPageModelForPreview(previewBaseUrl, req, res, ref, document);
            pageModel = PageModelUtils.merge(pageModel, partialPageModelForPreview);
        }
        return pageModel;
    }

    public static PageModel getPartialPageModelForPreview(final String previewBaseUrl, final HttpServletRequest req, final HttpServletResponse res, final String ref, final String document) {
        HttpHeaders headers = new HttpHeaders();
        Cookie jsessionId = WebUtils.getCookie(req, "JSESSIONID");
        Cookie visitor = WebUtils.getCookie(req, "_visitor");
        String visitorId = UUID.randomUUID().toString();
        if (jsessionId == null) {
            throw new UnauthorizedException("Not Authorized");
        }
        if (visitor != null) {
            visitorId = visitor.getValue();
        } else {
            res.addCookie(new Cookie("_visitor", visitorId));
        }
        headers.add("Cookie", "JSESSIONID=" + jsessionId.getValue());
        headers.add("Cookie", "_visitor=" + visitorId);
        headers.add("User-Agent", req.getHeader("User-Agent"));
        RestTemplate template = new RestTemplate();
        String partialRenderUrl = previewBaseUrl + String.format("?_hn:type=component-rendering&_hn:ref=%s", ref);

        LinkedMultiValueMap<String, Object> params = new LinkedMultiValueMap<>();
        params.add("document", document);

        HttpEntity<LinkedMultiValueMap<String, Object>> requestEntity =
                new HttpEntity<>(params, headers);

        ResponseEntity<PageModel> exchange = template.exchange(partialRenderUrl,
                POST,
                requestEntity,
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }

    public static PageModel merge(final PageModel original, final PageModel partial){
        String id = partial.getID();

        List<ComponentModel> components = original.getPage().getComponents();
        ComponentModel parentComponent = findComponent(components, id.substring(0, id.lastIndexOf('_')));
        ComponentModel component = findComponent(components, id);
        int index = parentComponent.getComponents().indexOf(component);

        ComponentModel partialComponentModel = partial.getPage();
        parentComponent.getComponents().set(index, partialComponentModel);

        original.getContentNode().putAll(partial.getContentNode());
        return original;
    }

    public static  ComponentModel findComponent(final List<ComponentModel> componentModels, final String id) {
        for (ComponentModel componentModel : componentModels) {
            if (componentModel.getID().equals(id)) {
                return componentModel;
            } else if (componentModel.getComponents() != null) {
                return findComponent(componentModel.getComponents(), id);
            }
        }
        return null;
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public static class UnauthorizedException extends RuntimeException {
        public UnauthorizedException() {
            super();
        }

        public UnauthorizedException(String message, Throwable cause) {
            super(message, cause);
        }

        public UnauthorizedException(String message) {
            super(message);
        }

        public UnauthorizedException(Throwable cause) {
            super(cause);
        }
    }
}

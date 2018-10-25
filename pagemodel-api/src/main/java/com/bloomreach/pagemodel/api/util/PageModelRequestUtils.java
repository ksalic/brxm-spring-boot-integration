package com.bloomreach.pagemodel.api.util;

import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.ws.WebServiceException;

import com.bloomreach.pagemodel.api.model.PageModel;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.WebUtils;

public class PageModelRequestUtils {

    public static PageModel getPageModel(final String baseUrl, final HttpServletRequest req, final HttpServletResponse res) {
        String url = baseUrl + req.getServletPath();
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
        ResponseEntity<PageModel> exchange = template.exchange(url,
                HttpMethod.GET,
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
            throw new UnauthorizedException("Not authorized");
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
                HttpMethod.GET,
                new HttpEntity<String>(headers),
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }

    public static PageModel getFullPageModelForPreview(final String previewBaseUrl, final String previewBasePrefix, final HttpServletRequest req, final HttpServletResponse res, final String ref, final MultiValueMap<String, Object> properties, boolean partial) {
        String url = previewBaseUrl + req.getServletPath().replace(previewBasePrefix, "");
        PageModel pageModel = getPageModelForPreview(url, req, res);
        if (partial) {
            properties.remove("partial");
            properties.remove("ref");
            PageModel partialPageModelForPreview = getPartialPageModelForPreview(url, req, res, ref, properties);
            pageModel = PageModelUtils.merge(pageModel, partialPageModelForPreview);
        }
        return pageModel;
    }

    public static PageModel getPartialPageModelForPreview(final String previewBaseUrl, final HttpServletRequest req, final HttpServletResponse res, final String ref, final MultiValueMap<String, Object> properties) {
        HttpHeaders headers = new HttpHeaders();
        Cookie jsessionId = WebUtils.getCookie(req, "JSESSIONID");
        Cookie visitor = WebUtils.getCookie(req, "_visitor");
        String visitorId = UUID.randomUUID().toString();
        if (jsessionId == null) {
            throw new UnauthorizedException("Not authorized");
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

        HttpEntity<MultiValueMap<String, Object>> requestEntity =
                new HttpEntity<>(properties, headers);

        ResponseEntity<PageModel> exchange = template.exchange(partialRenderUrl,
                HttpMethod.POST,
                requestEntity,
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }


    public static class UnauthorizedException extends WebServiceException {

        public UnauthorizedException(String message) {
            super(message);
        }

    }
}

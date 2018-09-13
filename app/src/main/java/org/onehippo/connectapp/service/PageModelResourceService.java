package org.onehippo.connectapp.service;

import java.util.Arrays;
import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import com.bloomreach.pagemodel.api.model.PageModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.RestTemplate;

import static org.springframework.http.HttpMethod.GET;

@Service
public final class PageModelResourceService {

    @Value("${base.resourceapi.url}")
    private String baseUrl;

    @Value("${base.preview.resourcepai.url}")
    private String previewBaseUrl;

    public PageModel getPageModel(final String path) {
        RestTemplate template = new RestTemplate();
        PageModel pageModel = template.getForObject(baseUrl + path, PageModel.class);
        return pageModel;
    }

    public PageModel getPageModelForPreview(final HttpServletRequest req) {
        HttpHeaders headers = new HttpHeaders();
        if(req.getCookies()==null){
            throw new UnauthorizedException("no cookies present");
        }
        Optional<Cookie> jsessionid = Arrays.asList(req.getCookies()).stream().filter(cookie -> cookie.getName().equals("JSESSIONID")).findFirst();
        if(!jsessionid.isPresent()){
            throw new UnauthorizedException("no jsession id set");
        }
        headers.add("Cookie", "JSESSIONID=" + Arrays.asList(req.getCookies()).stream().filter(cookie -> cookie.getName().equals("JSESSIONID")).findFirst().get().getValue());
//        String requestURI = req.getRequestURI();
        RestTemplate template = new RestTemplate();
        ResponseEntity<PageModel> exchange = template.exchange(previewBaseUrl,
                GET,
                new HttpEntity<String>(headers),
                PageModel.class);
        PageModel pageModel = exchange.getBody();
        return pageModel;
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public class UnauthorizedException extends RuntimeException {
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

    public String getBaseUrl() {
        return baseUrl;
    }

    public void setBaseUrl(final String baseUrl) {
        this.baseUrl = baseUrl;
    }


    public String getPreviewBaseUrl() {
        return previewBaseUrl;
    }

    public void setPreviewBaseUrl(final String previewBaseUrl) {
        this.previewBaseUrl = previewBaseUrl;
    }
}

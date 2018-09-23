package org.onehippo.connectapp;

import java.io.IOException;

import javax.servlet.http.Cookie;

import org.junit.Ignore;
import org.junit.Test;
import com.bloomreach.pagemodel.api.model.PageModel;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpRequest;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.RequestCallback;
import org.springframework.web.client.ResponseExtractor;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.WebUtils;

import static org.junit.Assert.assertNotNull;
import static org.springframework.http.HttpMethod.GET;

public class TestPageModelApi {

    @Ignore
    @Test
    public void testPageModelSerialization() {

        RestTemplate template = new RestTemplate();
//        PageModel forObject = template.getForObject("http://localhost:8080/site/resourceapi", PageModel.class);
//        assertNotNull(forObject);

//
//        HttpHeaders headers = new HttpHeaders();
//        RestTemplate template = new RestTemplate();
//        ResponseEntity<PageModel> exchange = template.exchange("http://localhost:8080/site/resourceapi",
//                GET,
//                new HttpEntity<String>(headers),
//                PageModel.class);
//        System.out.println(exchange.getHeaders());

        PageModel model = template.execute("http://localhost:8080/site/resourceapi", GET, request -> {
//            System.out.println(request.getHeaders());

        }, new ResponseExtractor<PageModel>() {
            @Override
            public PageModel extractData(final ClientHttpResponse response) throws IOException {
                System.out.println(response.getHeaders());
                return null;
            }
        });





    }
}

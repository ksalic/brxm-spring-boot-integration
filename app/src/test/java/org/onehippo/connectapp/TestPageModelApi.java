package org.onehippo.connectapp;

import org.junit.Ignore;
import org.junit.Test;
import com.bloomreach.pagemodel.api.model.PageModel;
import org.springframework.web.client.RestTemplate;

import static org.junit.Assert.assertNotNull;

public class TestPageModelApi {

    @Ignore
    @Test
    public void testPageModelSerialization() {

        RestTemplate template = new RestTemplate();
        PageModel forObject = template.getForObject("http://localhost:8080/site/resourceapi", PageModel.class);
        assertNotNull(forObject);



    }
}

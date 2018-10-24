package org.onehippo.connectapp;

import java.io.IOException;

import com.bloomreach.pagemodel.api.model.PageModel;
import com.bloomreach.pagemodel.api.util.TemplateSupport;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeType;

import org.junit.Ignore;
import org.junit.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.springframework.http.HttpMethod.GET;

public class TestPageModelApi {

    @Ignore
    @Test
    public void testPageModelSerialization() throws IOException {


        RestTemplate template = new RestTemplate();
        ResponseEntity<PageModel> exchange = template.exchange("http://localhost:8080/site/resourceapi", GET, null, PageModel.class);
        PageModel pageModel = exchange.getBody();

        TemplateSupport support = new TemplateSupport();

        JsonNode jsonNode = support.find(pageModel, "/content/u895fb1b6410d497298946b6a06d2b361");

        JsonNodeType nodeType = jsonNode.getNodeType();


    }
}

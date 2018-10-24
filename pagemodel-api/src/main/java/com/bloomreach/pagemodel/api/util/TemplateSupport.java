package com.bloomreach.pagemodel.api.util;

import java.util.Optional;

import com.bloomreach.pagemodel.api.model.ComponentModel;
import com.bloomreach.pagemodel.api.model.PageModel;
import com.fasterxml.jackson.core.JsonPointer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TemplateSupport {

    private static final String EMPTY = "";
    private static final String COMPONENT_ID = "data-cms-component-id=\"%s\"";
    private static final String CONTENT_ID = "data-cms-content-id=\"%s\"";
    private static final ObjectMapper MAPPER = new ObjectMapper();

    private boolean isPreview;

    public TemplateSupport(final boolean isPreview) {
        this.isPreview = isPreview;
    }

    public TemplateSupport() {
        this.isPreview = false;
    }

    public String component(ComponentModel component) {
        if (component != null && this.isPreview) {
            return String.format(COMPONENT_ID, component.getID());
        }
        return EMPTY;
    }

    public String content(String reference) {
        if (reference != null && this.isPreview) {
            return String.format(CONTENT_ID, reference);
        }
        return EMPTY;
    }

    public JsonNode find(Object root, String pointer) {
        JsonNode jsonNode = MAPPER.convertValue(root, JsonNode.class);
        return jsonNode.at(JsonPointer.valueOf(pointer));
    }

    public JsonNode find(Object root, JsonNode pointer) {
        JsonNode jsonNode = MAPPER.convertValue(root, JsonNode.class);
        return jsonNode.at(JsonPointer.valueOf(pointer.asText()));
    }

    public String getImageUrl(PageModel root, JsonNode pointer, String variant) {
        JsonNode jsonNode = MAPPER.convertValue(root, JsonNode.class);
        Optional<JsonNode> image = Optional.of(jsonNode.at(JsonPointer.valueOf(pointer.asText())));
        if (image.isPresent()) {
            String imageVariantUrl = image.get().get(variant).get("_links").get("site").get("href").asText();
            return imageVariantUrl;
        }
        return EMPTY;
    }
}

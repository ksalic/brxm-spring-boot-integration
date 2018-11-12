package com.bloomreach.pagemodel.api.util;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Optional;

import com.bloomreach.pagemodel.api.model.ComponentModel;
import com.bloomreach.pagemodel.api.model.DocumentRef;
import com.bloomreach.pagemodel.api.model.Menu;
import com.bloomreach.pagemodel.api.model.PageModel;
import com.fasterxml.jackson.core.JsonPointer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TemplateSupport {

    private static final String EMPTY = "";
    private static final String ORIGINAL = "original";
    private static final String COMPONENT_ID = "data-cms-component-id=\"%s\"";
    private static final String CONTENT_ID = "data-cms-content-id=\"%s\"";
    private static final String MENU_ID = "data-cms-menu-id=\"%s\"";
    private static final ObjectMapper MAPPER = new ObjectMapper();
    /**
     * JSON property name prefix for a UUID-based identifier.
     */
    private static final String CONTENT_ID_JSON_NAME_PREFIX = "u";
    private String baseUrl;
    private String previewBasePrefix;
    private boolean isPreview;

    public TemplateSupport(final boolean isPreview, final String baseUrl, final String previewBasePrefix) {
        this.isPreview = isPreview;
        this.baseUrl = baseUrl;
        this.previewBasePrefix = previewBasePrefix;
    }

    public TemplateSupport() {
        this.isPreview = false;
    }

    static String representationIdToJsonPropName(final String uuid) {
        return new StringBuilder(uuid.length()).append(CONTENT_ID_JSON_NAME_PREFIX).append(uuid.replaceAll("-", ""))
                .toString();
    }

    public String resourceUrl(String resource) {
        if (isPreview) {
            return baseUrl + previewBasePrefix + resource;
        }
        return resource;
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

    public String menu(ComponentModel menuComponentModel) {
        if (menuComponentModel != null && this.isPreview) {
            return String.format(MENU_ID, menuComponentModel.getID());
        }
        return EMPTY;
    }

    public String content(DocumentRef reference) {
        if (reference != null && this.isPreview) {
            return String.format(CONTENT_ID, reference.getReference());
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

    public String getImageUrl(PageModel root, JsonNode pointer) {
        return getImageUrl(root, pointer, ORIGINAL);
    }

    public String getImageUrl(PageModel root, JsonNode pointer, String variant) {
        JsonNode jsonNode = MAPPER.convertValue(root, JsonNode.class);
        Optional<JsonNode> image = Optional.of(jsonNode.at(JsonPointer.valueOf(pointer.asText())));
        String imageVariantUrl = null;
        if (image.isPresent()) {
            if (!isPreview) {
                imageVariantUrl = getUrl(root.getLinks().get("site").getHref()) + image.get().get(variant).get("_links").get("site").get("href").asText();
            } else {
                imageVariantUrl = image.get().get(variant).get("_links").get("site").get("href").asText();
            }
        }
        return imageVariantUrl;
    }

    public String getUrl(String url) {
        String newUrl = url;
        try {
            URL aURL = new URL(url);
            StringBuffer buffer = new StringBuffer();
            buffer.append(aURL.getProtocol());
            buffer.append("://");
            buffer.append(aURL.getAuthority());
            newUrl = buffer.toString();
        } catch (MalformedURLException e) {
            //e.printStackTrace();
        }
        return newUrl;
    }
}

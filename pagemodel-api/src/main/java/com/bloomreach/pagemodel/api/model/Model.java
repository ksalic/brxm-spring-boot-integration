package com.bloomreach.pagemodel.api.model;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

public class Model {

    private Menu menu;
    private DocumentRef document;
    private Map<String,JsonNode> other = new HashMap<>();

    @JsonProperty("menu")
    public Menu getMenu() { return menu; }
    @JsonProperty("menu")
    public void setMenu(Menu value) { this.menu = value; }

    @JsonProperty("document")
    public DocumentRef getDocument() { return document; }
    @JsonProperty("document")
    public void setDocument(DocumentRef value) { this.document = value; }

    @JsonAnyGetter
    public Map<String,JsonNode> anyOther() {
        return other;
    }

    @JsonAnySetter
    public void setOther(String name, JsonNode value) {
        other.put(name, value);
    }
}

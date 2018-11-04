package com.bloomreach.pagemodel.api.model;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

public class Content {

    private String id;
    private Map<String, LinkModel> links;
    private String name;
    private String displayName;
    private Map<String,JsonNode> other = new HashMap<>();


    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("_links")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public Map<String, LinkModel> getLinks() {
        if (links == null) {
            return null;
        }
        return Collections.unmodifiableMap(links);
    }

    @JsonProperty("_links")
    public void setLinks(final Map<String, LinkModel> linksMap) {
        this.links = linksMap;
    }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("displayName")
    public String getDisplayName() { return displayName; }
    @JsonProperty("displayName")
    public void setDisplayName(String value) { this.displayName = value; }

    @JsonAnyGetter
    public Map<String,JsonNode> anyOther() {
        return other;
    }

    @JsonAnySetter
    public void setOther(String name, JsonNode value) {
        other.put(name, value);
    }

}

package com.bloomreach.pagemodel.api.model;

import java.util.Arrays;
import java.util.Collections;
import java.util.Map;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Page {
    private String id;
    private String name;
    private String componentClass;
    private String type;
    private ComponentModel [] components;
    private MetaModel meta;
    private Map<String, LinkModel> links;

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("componentClass")
    public String getComponentClass() { return componentClass; }
    @JsonProperty("componentClass")
    public void setComponentClass(String value) { this.componentClass = value; }

    @JsonProperty("type")
    public String getType() { return type; }
    @JsonProperty("type")
    public void setType(String value) { this.type = value; }

    @JsonProperty("components")
    public ComponentModel [] getComponents() { return components; }
    @JsonProperty("components")
    public void setComponents(ComponentModel [] value) { this.components = value; }

    public Map<String, ComponentModel> getNamedComponents(){
        return Arrays.asList(getComponents()).stream().collect(Collectors.toMap(
                component -> component.getName(),
                component -> component));
    }

    @JsonProperty("_meta")
    public MetaModel getMeta() { return meta; }
    @JsonProperty("_meta")
    public void setMeta(MetaModel value) { this.meta = value; }

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
}

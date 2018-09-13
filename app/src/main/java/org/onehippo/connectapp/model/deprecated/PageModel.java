package org.onehippo.connectapp.model.deprecated;

import java.util.Collections;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

public class PageModel {
    private String id;
    private Map<String, LinkModel> links;
    private Page page;
    private Map<String, Content> content;
    private Map<String, JsonNode> contentNode;

    @JsonProperty("id")
    public String getID() {
        return id;
    }

    @JsonProperty("id")
    public void setID(String value) {
        this.id = value;
    }

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

    @JsonProperty("page")
    public Page getPage() {
        return page;
    }

    @JsonProperty("page")
    public void setPage(Page value) {
        this.page = value;
    }

//    @JsonProperty("content")
//    public Map<String, Content> getContent() {
//        if (content == null) {
//            return null;
//        }
//        return Collections.unmodifiableMap(content);
//    }
//
//    @JsonProperty("content")
//    public void setContent(final Map<String, Content> content) {
//        this.content = content;
//    }

    @JsonProperty("content")
    public Map<String, JsonNode> getContentNode() {
        if (contentNode == null) {
            return null;
        }
        return Collections.unmodifiableMap(contentNode);
    }

    @JsonProperty("content")
    public void setContentNode(final Map<String, JsonNode> contentNode) {
        this.contentNode = contentNode;
    }

    @Override
    public String toString() {
        return "PageModel{" +
                "id='" + id + '\'' +
                ", links=" + links +
                ", page=" + page +
                ", content=" + content +
                ", contentNode=" + contentNode +
                '}';
    }
}

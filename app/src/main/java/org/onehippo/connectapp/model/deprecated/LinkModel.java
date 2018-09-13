package org.onehippo.connectapp.model.deprecated;

import java.util.Map;
import com.fasterxml.jackson.annotation.*;

public class LinkModel {
    private String href;
    private String type;
    private String rel;
    private String title;

    @JsonProperty("href")
    public String getHref() { return href; }
    @JsonProperty("href")
    public void setHref(String value) { this.href = value; }
    @JsonProperty("type")
    public String getType() {
        return type;
    }
    @JsonProperty("type")
    public void setType(final String type) {
        this.type = type;
    }
    @JsonProperty("rel")
    public String getRel() {
        return rel;
    }
    @JsonProperty("rel")
    public void setRel(final String rel) {
        this.rel = rel;
    }
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }
    @JsonProperty("title")
    public void setTitle(final String title) {
        this.title = title;
    }
}

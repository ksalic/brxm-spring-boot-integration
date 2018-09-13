package org.onehippo.connectapp.model.deprecated;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeSpan {

    private String type;
    private String data;


    @JsonProperty("type")
    public String getType() {
        return type;
    }

    @JsonProperty("type")
    public void setType(final String type) {
        this.type = type;
    }

    @JsonProperty("data")
    public String getData() {
        return data;
    }

    @JsonProperty("data")
    public void setData(final String data) {
        this.data = data;
    }
}

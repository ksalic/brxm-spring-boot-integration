package com.bloomreach.pagemodel.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DocumentRef {
    private String ref;

    @JsonProperty("$ref")
    public String getRef() {
        return ref;
    }

    @JsonProperty("$ref")
    public void setRef(String value) {
        this.ref = value;
    }

    public String getReference() {
        String ref = getRef();
        if (ref != null) {
            ref = ref.substring(9);
        }
        return ref;
    }
}

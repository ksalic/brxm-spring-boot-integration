package org.onehippo.connectapp.model.deprecated;

import java.util.Map;
import com.fasterxml.jackson.annotation.*;

public class DocumentRef {
    private String ref;

    @JsonProperty("$ref")
    public String getRef() { return ref; }
    @JsonProperty("$ref")
    public void setRef(String value) { this.ref = value; }
}

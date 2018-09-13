package org.onehippo.connect.proxy;

import java.util.HashMap;
import java.util.Map;

public class FlatComponentModelMap {

    private Map<String, FlatComponentModel> components = new HashMap<>();

    public Map<String, FlatComponentModel> getComponents() {
        return components;
    }

    public void setComponents(final Map<String, FlatComponentModel> components) {
        this.components = components;
    }

    public FlatComponentModel put(final String key, final FlatComponentModel value) {
        return components.put(key, value);
    }
}

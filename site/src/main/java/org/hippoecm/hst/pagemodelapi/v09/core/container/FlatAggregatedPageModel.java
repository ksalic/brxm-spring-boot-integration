package org.hippoecm.hst.pagemodelapi.v09.core.container;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.onehippo.connect.proxy.FlatComponentWindowModel;

public class FlatAggregatedPageModel {

    private Map<String, FlatComponentWindowModel> flattened = new HashMap<>();

    private FlatComponentWindowModel pageWindowModel;

    @JsonIgnore
    public FlatComponentWindowModel getPageWindowModel() {
        return pageWindowModel;
    }

    public void setPageWindowModel(final FlatComponentWindowModel pageWindowModel) {
        this.pageWindowModel = pageWindowModel;
        populateFlattened(pageWindowModel);
    }

    private void populateFlattened(final FlatComponentWindowModel pageWindowModel) {
        flattened.put(pageWindowModel.getId(), pageWindowModel);

        final Set<FlatComponentWindowModel> components = pageWindowModel.getComponents();

        if (components != null) {
            for (FlatComponentWindowModel child : components) {
                populateFlattened(child);
            }
        }
    }


    @JsonProperty("components")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public Collection<FlatComponentWindowModel> getComponents() {
        return flattened.values();
    }

    public void setComponents(Collection<FlatComponentWindowModel> components) {
        components.forEach(flatComponentWindowModel -> flattened.put(flatComponentWindowModel.getId(), flatComponentWindowModel));
    }

    @JsonIgnore
    public Optional<FlatComponentWindowModel> getModel(final String referenceNamespace) {
        return Optional.ofNullable(flattened.get(referenceNamespace));
    }

    public FlatComponentWindowModel get(final Object key) {
        return flattened.get(key);
    }

    public boolean containsKey(final Object key) {
        return flattened.containsKey(key);
    }
}

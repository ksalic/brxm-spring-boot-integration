package org.onehippo.connectapp.model.deprecated;

import java.util.Collections;
import java.util.Map;
import com.fasterxml.jackson.annotation.*;

public class SiteMenuItem {
    private long depth;
    private boolean repositoryBased;
    private String name;
    private boolean expanded;
    private boolean selected;
    private Object[] childMenuItems;
    private Map<String, LinkModel> links;

    @JsonProperty("depth")
    public long getDepth() { return depth; }
    @JsonProperty("depth")
    public void setDepth(long value) { this.depth = value; }

    @JsonProperty("repositoryBased")
    public boolean getRepositoryBased() { return repositoryBased; }
    @JsonProperty("repositoryBased")
    public void setRepositoryBased(boolean value) { this.repositoryBased = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("expanded")
    public boolean getExpanded() { return expanded; }
    @JsonProperty("expanded")
    public void setExpanded(boolean value) { this.expanded = value; }

    @JsonProperty("selected")
    public boolean getSelected() { return selected; }
    @JsonProperty("selected")
    public void setSelected(boolean value) { this.selected = value; }

    @JsonProperty("childMenuItems")
    public Object[] getChildMenuItems() { return childMenuItems; }
    @JsonProperty("childMenuItems")
    public void setChildMenuItems(Object[] value) { this.childMenuItems = value; }

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

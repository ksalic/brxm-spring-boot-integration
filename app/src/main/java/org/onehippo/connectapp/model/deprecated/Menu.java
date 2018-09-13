package org.onehippo.connectapp.model.deprecated;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Menu {
    private String name;
    private SiteMenuItem[] siteMenuItems;
    private SiteMenuItem selectSiteMenuItem;

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String value) {
        this.name = value;
    }

    @JsonProperty("siteMenuItems")
    public SiteMenuItem[] getSiteMenuItems() {
        return siteMenuItems;
    }

    @JsonProperty("siteMenuItems")
    public void setSiteMenuItems(SiteMenuItem[] value) {
        this.siteMenuItems = value;
    }

    @JsonProperty("selectSiteMenuItem")
    public SiteMenuItem getSelectSiteMenuItem() {
        return selectSiteMenuItem;
    }

    @JsonProperty("selectSiteMenuItem")
    public void setSelectSiteMenuItem(SiteMenuItem value) {
        this.selectSiteMenuItem = value;
    }
}

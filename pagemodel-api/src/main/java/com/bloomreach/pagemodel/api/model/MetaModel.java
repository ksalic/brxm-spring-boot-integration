package com.bloomreach.pagemodel.api.model;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MetaModel {
    private String definitionID;
    private String pageTitle;
    private Map<String, String> params;
    private Map<String, String> paramsInfo;
    private NodeSpan[] beginNodeSpan;
    private NodeSpan[] endNodeSpan;


    @JsonProperty("definitionId")
    public String getDefinitionID() { return definitionID; }
    @JsonProperty("definitionId")
    public void setDefinitionID(String value) { this.definitionID = value; }

    @JsonProperty("pageTitle")
    public String getPageTitle() { return pageTitle; }
    @JsonProperty("pageTitle")
    public void setPageTitle(String value) { this.pageTitle = value; }
    @JsonProperty("params")
    public Map<String, String> getParams() { return params; }
    @JsonProperty("params")
    public void setParams(Map<String, String> value) { this.params = value; }

    @JsonProperty("paramsInfo")
    public Map<String, String> getParamsInfo() { return paramsInfo; }
    @JsonProperty("paramsInfo")
    public void setParamsInfo(Map<String, String> value) { this.paramsInfo = value; }

    @JsonProperty("beginNodeSpan")
    public NodeSpan[] getBeginNodeSpan() {
        return beginNodeSpan;
    }

    public String getStart(){
        return getBeginNodeSpan()[0].getData();
    }

    public String getEnd(){
        return getEndNodeSpan()[0].getData();
    }


    @JsonProperty("beginNodeSpan")
    public void setBeginNodeSpan(final NodeSpan[] beginNodeSpan) {
        this.beginNodeSpan = beginNodeSpan;
    }

    @JsonProperty("endNodeSpan")
    public NodeSpan[] getEndNodeSpan() {
        return endNodeSpan;
    }

    @JsonProperty("endNodeSpan")
    public void setEndNodeSpan(final NodeSpan[] endNodeSpan) {
        this.endNodeSpan = endNodeSpan;
    }
}

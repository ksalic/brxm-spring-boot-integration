package com.bloomreach.pagemodel.api.model;

import java.util.List;
import java.util.Map;

public interface Component {

    public String getID();


    public String getName();


    public String getComponentClass();


    public String getType();


    public List<ComponentModel> getComponents();


    public MetaModel getMeta();


    public Map<String, LinkModel> getLinks();


    public Model getModels();


    public String getLabel();

}

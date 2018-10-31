package com.bloomreach.pagemodel.api.util;

import java.util.List;

import com.bloomreach.pagemodel.api.model.ComponentModel;
import com.bloomreach.pagemodel.api.model.PageModel;

public class PageModelUtils {


    public static PageModel merge(final PageModel original, final PageModel partial) {
        String id = partial.getID();

        List<ComponentModel> components = original.getPage().getComponents();
        String parentId = id.substring(0, id.lastIndexOf('_'));
        ComponentModel parentComponent = findComponent(components, parentId);
        ComponentModel component = findComponent(components, id);
        int index = parentComponent.getComponents().indexOf(component);

        ComponentModel partialComponentModel = partial.getPage();
        parentComponent.getComponents().set(index, partialComponentModel);

        original.getContentNode().putAll(partial.getContentNode());
        return original;
    }



    public static ComponentModel findComponent(final List<ComponentModel> componentModels, final String id) {
        ComponentModel parent = null;
        for (ComponentModel componentModel : componentModels) {
            if (componentModel.getID().equals(id)) {
                return componentModel;
            } else if (componentModel.getComponents() != null) {
                parent = findComponent(componentModel.getComponents(), id);
            }
        }
        return parent;
    }


}

package com.bloomreach.pma.integration.springboot.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bloomreach.pagemodel.api.model.PageModel;
import com.bloomreach.pma.integration.springboot.service.PageModelResourceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

@Controller
public class WebController {

    @Autowired
    ResourceHttpRequestHandler handler;
    @Autowired
    private PageModelResourceService pageModelResourceService;

    @GetMapping(path = "**")
    public String getHomePage(Model model, HttpServletRequest req, HttpServletResponse res) {
        PageModel pageModel = pageModelResourceService.getPageModel(req, res);
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", false);
        model.addAttribute("pma", pageModelResourceService.getLiveTemplateSupport());
        return pageModel.getPage().getName();
    }

    @GetMapping(path = "{folder:(?:css|js|fonts|images)}/**")
    public void liveResources(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        handler.handleRequest(req, res);
    }

    @GetMapping(path = {"/_cmsinternal/css/**", "/_cmsinternal/js/**", "/_cmsinternal/fonts/**", "/_cmsinternal/images/**"})
    public void previewResources(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String path = (String)req.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE);
        path = path.replace("/_cmsinternal", "");
        req.setAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE, path);
        handler.handleRequest(req, res);
    }

    @GetMapping(path = "/_cmsinternal/**")
    public String getCmsInternalPage(Model model, HttpServletRequest req, HttpServletResponse res,
                                     @RequestParam(value = "partial", required = false) boolean partial,
                                     @RequestParam(value = "ref", required = false) String ref,
                                     @RequestParam MultiValueMap<String, Object> properties) {
        PageModel pageModel = pageModelResourceService.getFullPageModelForPreview(req, res, ref, properties, partial);
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", true);
        model.addAttribute("pma", pageModelResourceService.getPreviewTemplateSupport());
        return pageModel.getPage().getName();
    }

    public void contributeToModel(final Model model, HttpServletRequest req, HttpServletResponse res){

    }

}

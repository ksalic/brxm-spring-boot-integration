package org.onehippo.connectapp.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bloomreach.pagemodel.api.model.PageModel;
import com.bloomreach.pagemodel.api.util.TemplateSupport;

import org.onehippo.connectapp.service.PageModelResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

@Controller
public class WebController {

    @Autowired
    ResourceHttpRequestHandler handler;
    @Autowired
    private PageModelResourceService service;
    private TemplateSupport previewTemplateSupport = new TemplateSupport(true);
    private TemplateSupport liveTemplateSupport = new TemplateSupport();


    @GetMapping(path = "**")
    public String getHomePage(Model model, HttpServletRequest req, HttpServletResponse res) {
        PageModel pageModel = service.getPageModel(req, res);
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", false);
        model.addAttribute("ts", liveTemplateSupport);
        return pageModel.getPage().getName();
    }

    @GetMapping(path = "css/**")
    public void css(Model model, HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        handler.handleRequest(req, res);
    }

    @GetMapping(path = "js/**")
    public void js(Model model, HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        handler.handleRequest(req, res);
    }

    @GetMapping(path = "fonts/**")
    public void fonts(Model model, HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        handler.handleRequest(req, res);
    }

    @GetMapping(path = "images/**")
    public void images(Model model, HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        handler.handleRequest(req, res);
    }


    @GetMapping(path = "/_cmsinternal/**")
    public String getCmsInternalPage(Model model, HttpServletRequest req, HttpServletResponse res,
                                     @RequestParam(value = "partial", required = false) boolean partial,
                                     @RequestParam(value = "ref", required = false) String ref,
                                     @RequestParam MultiValueMap<String, Object> properties) {
        PageModel pageModel = service.getFullPageModelForPreview(req, res, ref, properties, partial);
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", true);
        model.addAttribute("ts", previewTemplateSupport);
        return pageModel.getPage().getName();
    }


}

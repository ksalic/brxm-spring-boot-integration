package org.onehippo.connectapp.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bloomreach.pagemodel.api.model.PageModel;
import org.onehippo.connectapp.service.PageModelResourceService;
import org.onehippo.connectapp.util.PageModelUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class WebController {

    @Autowired
    PageModelResourceService service;

    @GetMapping(path = "/")
    public String getHomePage(Model model, HttpServletRequest req, HttpServletResponse res) {
        PageModel pageModel = service.getPageModel(req, res);
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", false);
        return pageModel.getPage().getName();
    }

//    @GetMapping(path = "/**")
//    public String getPage(Model model, HttpServletRequest req) {
//        PageModel pageModel = service.getPageModel("/");
//        model.addAttribute("pageModel", pageModel);
//        model.addAttribute("isPreview", false);
//        return "home";
//    }

    @GetMapping(path = "/_cmsinternal/**")
    public String getCmsInternalPage(Model model, HttpServletRequest req, HttpServletResponse res,
                                     @RequestParam(value = "partial", required = false) boolean partial,
                                     @RequestParam(value = "ref", required = false) String ref,
                                     @RequestParam(value = "document", required = false) String document,
                                     @RequestParam Map<String,String> allRequestParams) {
        PageModel pageModel = service.getFullPageModelForPreview(req, res, ref, document, partial);
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", true);
        return pageModel.getPage().getName();
    }




}

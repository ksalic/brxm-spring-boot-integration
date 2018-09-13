package org.onehippo.connectapp.controller;

import javax.servlet.http.HttpServletRequest;

import com.bloomreach.pagemodel.api.model.PageModel;
import org.onehippo.connectapp.service.PageModelResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @Autowired
    PageModelResourceService service;

    @GetMapping(path = "/")
    public String getHomePage(Model model, HttpServletRequest req) {
        PageModel pageModel = service.getPageModel("/");
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", false);
        return "home";
    }

//    @GetMapping(path = "/**")
//    public String getPage(Model model, HttpServletRequest req) {
//        PageModel pageModel = service.getPageModel("/");
//        model.addAttribute("pageModel", pageModel);
//        model.addAttribute("isPreview", false);
//        return "home";
//    }

    @GetMapping(path = "/_cmsinternal/**")
    public String getCmsInternalPage(Model model, HttpServletRequest req) {
        PageModel pageModel = service.getPageModelForPreview(req);
        model.addAttribute("pageModel", pageModel);
        model.addAttribute("isPreview", true);
        return "home";
    }
}

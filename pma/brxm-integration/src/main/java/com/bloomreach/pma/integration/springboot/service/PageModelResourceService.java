package com.bloomreach.pma.integration.springboot.service;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bloomreach.pagemodel.api.model.PageModel;
import com.bloomreach.pagemodel.api.util.PageModelRequestUtils;
import com.bloomreach.pagemodel.api.util.TemplateSupport;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

@Service
public final class PageModelResourceService {

    @Value("${brxm.base.pagemodel.url}")
    private String basePageModelUrl;

    @Value("${brxm.base.preview.pagemodel.url}")
    private String previewBasePageModelUrl;

    @Value("${brxm.base.preview.prefix}")
    private String previewBasePrefix;

    @Value("${brxm.base.url}")
    private String baseUrl;

    private TemplateSupport previewTemplateSupport;

    private TemplateSupport liveTemplateSupport = new TemplateSupport();

    @PostConstruct
    public void init() {
        previewTemplateSupport = new TemplateSupport(true, basePageModelUrl, previewBasePrefix);
    }

    public PageModel getPageModel(final HttpServletRequest req, final HttpServletResponse res) {
        return PageModelRequestUtils.getPageModel(basePageModelUrl, req, res);
    }

    public PageModel getFullPageModelForPreview(final HttpServletRequest req, final HttpServletResponse res, final String ref, final MultiValueMap<String, Object> properties, final boolean partial) {
        return PageModelRequestUtils.getFullPageModelForPreview(previewBasePageModelUrl, previewBasePrefix, req, res, ref, properties, partial);
    }

    public String getBasePageModelUrl() {
        return basePageModelUrl;
    }

    public String getPreviewBasePageModelUrl() {
        return previewBasePageModelUrl;
    }

    public String getPreviewBasePrefix() {
        return previewBasePrefix;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public TemplateSupport getPreviewTemplateSupport() {
        return previewTemplateSupport;
    }

    public TemplateSupport getLiveTemplateSupport() {
        return liveTemplateSupport;
    }
}

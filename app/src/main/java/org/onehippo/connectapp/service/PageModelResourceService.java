package org.onehippo.connectapp.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bloomreach.pagemodel.api.model.PageModel;

import org.onehippo.connectapp.util.PageModelUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public final class PageModelResourceService {

    @Value("${base.resourceapi.url}")
    private String baseUrl;

    @Value("${base.preview.resourcepai.url}")
    private String previewBaseUrl;

    public PageModel getPageModel(final HttpServletRequest req, final HttpServletResponse res) {
        return PageModelUtils.getPageModel(baseUrl, req, res);
    }

    public PageModel getPageModelForPreview(final HttpServletRequest req, final HttpServletResponse res) {
        return PageModelUtils.getPageModelForPreview(previewBaseUrl, req, res);
    }

    public PageModel getPartialPageModelForPreview(final HttpServletRequest req, final HttpServletResponse res, final String ref, final String document) {
        return PageModelUtils.getPartialPageModelForPreview(previewBaseUrl, req, res, ref, document);
    }

    public PageModel getFullPageModelForPreview(final HttpServletRequest req, final HttpServletResponse res, final String ref, final String document, final boolean partial) {
        return PageModelUtils.getFullPageModelForPreview(previewBaseUrl, req, res, ref, document, partial);
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public void setBaseUrl(final String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String getPreviewBaseUrl() {
        return previewBaseUrl;
    }

    public void setPreviewBaseUrl(final String previewBaseUrl) {
        this.previewBaseUrl = previewBaseUrl;
    }


}

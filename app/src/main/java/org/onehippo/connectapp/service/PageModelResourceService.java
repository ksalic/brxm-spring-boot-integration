package org.onehippo.connectapp.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bloomreach.pagemodel.api.model.PageModel;

import com.bloomreach.pagemodel.api.util.PageModelRequestUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

@Service
public final class PageModelResourceService {

    @Value("${base.resourceapi.url}")
    private String baseUrl;

    @Value("${base.preview.resourcepai.url}")
    private String previewBaseUrl;

    public PageModel getPageModel(final HttpServletRequest req, final HttpServletResponse res) {
        return PageModelRequestUtils.getPageModel(baseUrl, req, res);
    }

    public PageModel getFullPageModelForPreview(final HttpServletRequest req, final HttpServletResponse res, final String ref, final MultiValueMap<String, Object> properties, final boolean partial) {
        return PageModelRequestUtils.getFullPageModelForPreview(previewBaseUrl, req, res, ref, properties, partial);
    }


}

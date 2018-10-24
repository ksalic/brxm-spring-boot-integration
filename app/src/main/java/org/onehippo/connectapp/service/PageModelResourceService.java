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

    @Value("${brxm.base.pagemodel.url}")
    private String baseUrl;

    @Value("${brxm.base.preview.pagemodel.url}")
    private String previewBaseUrl;

    @Value("${brxm.base.preview.prefix}")
    private String previewBasePrefix;

    public PageModel getPageModel(final HttpServletRequest req, final HttpServletResponse res) {
        return PageModelRequestUtils.getPageModel(baseUrl, req, res);
    }

    public PageModel getFullPageModelForPreview(final HttpServletRequest req, final HttpServletResponse res, final String ref, final MultiValueMap<String, Object> properties, final boolean partial) {
        return PageModelRequestUtils.getFullPageModelForPreview(previewBaseUrl, previewBasePrefix, req, res, ref, properties, partial);
    }


}

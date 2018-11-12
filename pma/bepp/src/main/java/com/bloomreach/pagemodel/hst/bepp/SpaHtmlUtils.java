package com.bloomreach.pagemodel.hst.bepp;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.DataNode;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.apache.commons.lang3.CharEncoding.UTF_8;


public class SpaHtmlUtils {

    private static final Logger log = LoggerFactory.getLogger(SpaHtmlUtils.class);


    public static String convertToSpaEnabledHtml(final String source, final String baseUrl, final String spaSupportUrl, final HttpServletRequest hsRequest, final HttpServletResponse hsResponse) {
        if (StringUtils.isNotEmpty(spaSupportUrl)) {
            FlatComponentModelMap flatModelMap = PageModelProxyUtils.getFlatListModelForPreview(spaSupportUrl, hsRequest, hsResponse);
            return convertToSpaEnabledHtml(source, baseUrl, flatModelMap);
        }
        return source;
    }

    public static String convertToSpaEnabledHtml(final String source, final String baseUrl, final FlatComponentModelMap flatComponentModelMap) {
        Document doc = Jsoup.parse(source, baseUrl);

        if (flatComponentModelMap != null) {
            Elements dataCmsComponentElements = doc.getElementsByAttribute("data-cms-component-id");

            for (Element dataCms : dataCmsComponentElements) {

                String attr = dataCms.attr("data-cms-component-id");
                if (flatComponentModelMap.getComponents().containsKey(attr)) {
                    FlatComponentModel flatComponentWindowModel = flatComponentModelMap.getComponents().get(attr);
                    dataCms.removeAttr("data-cms-component-id");
                    dataCms.before(new DataNode(flatComponentWindowModel.getCommentStart()));
                    dataCms.after(new DataNode(flatComponentWindowModel.getCommentEnd()));
                }
            }

            Elements dataCmsContentElements = doc.getElementsByAttribute("data-cms-content-id");

            for (Element dataCms : dataCmsContentElements) {

                String attr = dataCms.attr("data-cms-content-id");
                if (flatComponentModelMap.getContent().containsKey(attr)) {
                    dataCms.attr("style", "position:relative;");
                    FlatComponentModel flatComponentWindowModel = flatComponentModelMap.getContent().get(attr);
                    dataCms.removeAttr("data-cms-content-id");
                    dataCms.insertChildren(0, new DataNode(flatComponentWindowModel.getCommentStart()));
                }
            }

            Elements dataCmsMenuElements = doc.getElementsByAttribute("data-cms-menu-id");

            for (Element dataCms : dataCmsMenuElements) {

                String attr = dataCms.attr("data-cms-menu-id");
                if (flatComponentModelMap.getMenu().containsKey(attr)) {
                    dataCms.attr("style", "position:relative;");
                    FlatComponentModel flatComponentWindowModel = flatComponentModelMap.getMenu().get(attr);
                    dataCms.removeAttr("data-cms-menu-id");
                    dataCms.insertChildren(0, new DataNode(flatComponentWindowModel.getCommentStart()));
                }
            }
        }


        try (InputStream resourceAsStream = SpaHtmlUtils.class.getResourceAsStream("/script.js")) {
            String script = IOUtils.toString(resourceAsStream, UTF_8);
            doc.body().children().last().after(new DataNode("<script>" + script + "</script>"));
        } catch (IOException e) {
            log.error("error while trying to load script in spa proxy", e);
        }
        return doc.toString();
    }
}

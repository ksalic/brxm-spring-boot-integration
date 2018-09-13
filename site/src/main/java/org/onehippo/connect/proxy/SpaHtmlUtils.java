package org.onehippo.connect.proxy;

import java.io.IOException;
import java.net.URL;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.pagemodelapi.v09.core.container.FlatAggregatedPageModel;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Comment;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SpaHtmlUtils {

    private static final Logger log = LoggerFactory.getLogger(SpaHtmlUtils.class);

    private static final ObjectMapper MAPPER = new ObjectMapper();

    static {
        MAPPER.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
    }

    public static String convertToSpaEnabledHtml(final String source, final String baseUrl, final String spaSupportUrl) {
        try {
            if (StringUtils.isNotEmpty(spaSupportUrl)) {
                FlatAggregatedPageModel pageModel = MAPPER.readValue(new URL(spaSupportUrl), FlatAggregatedPageModel.class);
                return convertToSpaEnabledHtml(source, baseUrl, pageModel);
            }
            return convertToSpaEnabledHtml(source, baseUrl, (FlatAggregatedPageModel) null);
        } catch (IOException e) {
            log.error("error while trying to parse through spa html", e);
        }
        return source;
    }

    public static String convertToSpaEnabledHtml(final String source, final String baseUrl, final FlatAggregatedPageModel pageModel) {
        Document doc = Jsoup.parse(source, baseUrl);

//        Elements links = doc.select("link");
//        for (Element link : links) {
//            String absUrl = link.absUrl("href");
//            link.attr("href", absUrl);
//        }
//        Elements scripts = doc.select("script");
//        for (Element script : scripts) {
//            if(script.hasAttr("src")){
//                String absUrl = script.absUrl("src");
//                script.attr("src", absUrl);
//                if(script.hasAttr("data-dtconfig")){
//                    String dtconfig = script.attr("data-dtconfig");
//                    String base = doc.baseUri();
//                    dtconfig = dtconfig.replace("reportUrl=/", "reportUrl=" + base + "/");
//                    dtconfig = dtconfig.replace("agentUri=/", "agentUri=" + base + "/");
//                    script.attr("data-dtconfig", dtconfig);
//                }
//            }
//        }

        if (pageModel != null) {
            Elements dataCmsElements = doc.getElementsByAttribute("data-cms-id");

            for (Element dataCms : dataCmsElements) {

                String attr = dataCms.attr("data-cms-id");
                if(pageModel.containsKey(attr)){
                    FlatComponentWindowModel flatComponentWindowModel = pageModel.get(attr);
                    dataCms.removeAttr("data-cms-id");
                    dataCms.before(new Comment(" " + flatComponentWindowModel.startComment()+ " "));
                    dataCms.after(new Comment(" " + flatComponentWindowModel.endComment()+ " "));
                }
            }
        }

        return doc.toString();
    }
}

package org.onehippo.connect.proxy;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import javax.servlet.http.Cookie;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.pagemodelapi.v09.core.container.FlatAggregatedPageModel;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Comment;
import org.jsoup.nodes.DataNode;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.apache.commons.lang.CharEncoding.UTF_8;

public class SpaHtmlUtils {

    private static final Logger log = LoggerFactory.getLogger(SpaHtmlUtils.class);


    public static String convertToSpaEnabledHtml(final String source, final String baseUrl, final String spaSupportUrl, final String JSESSIONID) {
        if (StringUtils.isNotEmpty(spaSupportUrl)) {
            PageModelServiceClient client = new PageModelServiceClient();
            FlatComponentModelMap flatModelMap = client.getFlatListModelForPreview(spaSupportUrl, new Cookie[]{new Cookie("JSESSIONID", JSESSIONID)}, "");
            return convertToSpaEnabledHtml(source, baseUrl, flatModelMap);
        }
        return source;
    }

    public static String convertToSpaEnabledHtml(final String source, final String baseUrl, final FlatComponentModelMap flatComponentModelMap) {
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

        if (flatComponentModelMap != null) {
            Elements dataCmsElements = doc.getElementsByAttribute("data-cms-id");

            for (Element dataCms : dataCmsElements) {

                String attr = dataCms.attr("data-cms-id");
                if(flatComponentModelMap.getComponents().containsKey(attr)){
                    FlatComponentModel flatComponentWindowModel = flatComponentModelMap.getComponents().get(attr);
                    dataCms.removeAttr("data-cms-id");
                    dataCms.before(new DataNode(flatComponentWindowModel.getCommentStart()));
                    dataCms.after(new DataNode(flatComponentWindowModel.getCommentEnd()));
                }
            }
        }

        InputStream resourceAsStream = SpaHtmlUtils.class.getResourceAsStream("/script.js");
        try {
            String script = IOUtils.toString(resourceAsStream, UTF_8);
            doc.body().children().last().after(new DataNode("<script>" +
                    "(function () {\n" +
                    "  // your page initialization code here\n" +
                    "  // the DOM will be available here\n" +
                    "  alert('application loaded in channel manager - js injected through proxy');\n" +
                    "})();" +
                    "</script>"));
        } catch (IOException e) {
           log.error("error while trying to load script in spa proxy", e);
        }


        return doc.toString();
    }
}
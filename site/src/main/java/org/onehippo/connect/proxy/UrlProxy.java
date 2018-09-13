package org.onehippo.connect.proxy;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;
import java.util.Enumeration;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.methods.*;
import org.slf4j.LoggerFactory;
import org.tuckey.web.filters.urlrewrite.utils.StringUtils;

/**
 * <p>
 * https://github.com/paultuckey/urlrewritefilter/issues/149 https://github.com/paultuckey/urlrewritefilter/blob/master/src/main/java/org/tuckey/web/filters/urlrewrite/RequestProxy.java
 */
public class UrlProxy {
    private static final org.slf4j.Logger log = LoggerFactory.getLogger(UrlProxy.class);

    public UrlProxy() {

    }

    private String target;
    private String hostHeader;
    private String spaSupport;
    private Boolean replaceSecureCookies = false;

    public void init(ServletConfig config) {
        target = config.getInitParameter("target");
        log.info("Setting the target URL: " + target);
        hostHeader = config.getInitParameter("hostHeader");
        log.info("Setting the host header: " + hostHeader);

        replaceSecureCookies = Boolean.parseBoolean(config.getInitParameter("replaceSecureCookies"));
        log.info("Replacing secure cookies: " + replaceSecureCookies);

        spaSupport = config.getInitParameter("spa-support");
        log.info("Setting the spa support URL: " + spaSupport);
    }

    /**
     * This method performs the proxying of the request to the target address.
     *
     * @param hsRequest  The request data which should be send to the
     * @param hsResponse The response data which will contain the data returned by the proxied request to target.
     * @throws IOException Passed on from the connection logic.
     */
    public void execute(final HttpServletRequest hsRequest, final HttpServletResponse hsResponse) throws IOException {

        String requestTarget = target.replace("$1", hsRequest.getAttribute("wildcard").toString());
        String requestTargetSpaSupport = spaSupport.replace("$1", hsRequest.getAttribute("wildcard").toString());

        if (log.isInfoEnabled()) {
            log.info("execute, target is " + requestTarget);
            log.info("response commit state: " + hsResponse.isCommitted());
        }

        if (StringUtils.isBlank(target)) {
            log.error("The target address is not given. Please provide a target address.");
            return;
        }

        log.info("checking url");
        final URL url;
        try {
            url = new URL(requestTarget);
        } catch (MalformedURLException e) {
            log.error("The provided target url is not valid.", e);
            return;
        }


        log.info("setting up the host configuration");

        final HostConfiguration config = new HostConfiguration();

        ProxyHost proxyHost = getUseProxyServer((String) hsRequest.getAttribute("use-proxy"));
        if (proxyHost != null) {
            config.setProxyHost(proxyHost);
        }

        final int port = url.getPort() != -1 ? url.getPort() : url.getDefaultPort();
        config.setHost(url.getHost(), port, url.getProtocol());

        if (log.isInfoEnabled()) {
            log.info("config is " + config.toString());
        }

        final HttpMethod targetRequest = setupProxyRequest(hsRequest, url);
        if (targetRequest == null) {
            log.error("Unsupported request method found: " + hsRequest.getMethod());
            return;
        }

        //perform the reqeust to the target server
        final HttpClient client = new HttpClient(new SimpleHttpConnectionManager());
        if (log.isInfoEnabled()) {
            log.info("client state" + client.getState());
            log.info("client params" + client.getParams().toString());
            log.info("executeMethod / fetching data ...");
        }

        final int result;

        String jsessionid = Arrays.asList(hsRequest.getCookies()).stream().filter(cookie -> cookie.getName().equals("JSESSIONID")).findFirst().get().getValue();
        targetRequest.setRequestHeader("Cookie", "JSESSIONID=" + jsessionid);

        if (targetRequest instanceof EntityEnclosingMethod) {
            final RequestProxyCustomRequestEntity requestEntity = new RequestProxyCustomRequestEntity(
                    hsRequest.getInputStream(), hsRequest.getContentLength(), hsRequest.getContentType());
            final EntityEnclosingMethod entityEnclosingMethod = (EntityEnclosingMethod) targetRequest;
            entityEnclosingMethod.setRequestEntity(requestEntity);
            result = client.executeMethod(config, entityEnclosingMethod);

        } else {
            result = client.executeMethod(config, targetRequest);
        }

        //copy the target response headers to our response
        setupResponseHeaders(targetRequest, hsResponse);

        //InputStream originalResponseStream //= targetRequest.getResponseBodyAsStream();
        String source = targetRequest.getResponseBodyAsString();

        String converted = SpaHtmlUtils.convertToSpaEnabledHtml(source, requestTarget, requestTargetSpaSupport, jsessionid);

        InputStream originalResponseStream = new ByteArrayInputStream(converted.getBytes());
        //the body might be null, i.e. for responses with cache-headers which leave out the body
        if (originalResponseStream != null) {
            OutputStream responseStream = hsResponse.getOutputStream();
            copyStream(originalResponseStream, responseStream);
        }

        log.info("set up response, result code was " + result);
    }

    public static void copyStream(InputStream in, OutputStream out) throws IOException {
        byte[] buf = new byte[65536];
        int count;
        while ((count = in.read(buf)) != -1) {
            out.write(buf, 0, count);
        }
    }


    public ProxyHost getUseProxyServer(String useProxyServer) {
        ProxyHost proxyHost = null;
        if (useProxyServer != null) {
            String proxyHostStr = useProxyServer;
            int colonIdx = proxyHostStr.indexOf(':');
            if (colonIdx != -1) {
                proxyHostStr = proxyHostStr.substring(0, colonIdx);
                String proxyPortStr = useProxyServer.substring(colonIdx + 1);
                if (proxyPortStr != null && proxyPortStr.length() > 0 && proxyPortStr.matches("[0-9]+")) {
                    int proxyPort = Integer.parseInt(proxyPortStr);
                    proxyHost = new ProxyHost(proxyHostStr, proxyPort);
                } else {
                    proxyHost = new ProxyHost(proxyHostStr);
                }
            } else {
                proxyHost = new ProxyHost(proxyHostStr);
            }
        }
        return proxyHost;
    }

    private HttpMethod setupProxyRequest(final HttpServletRequest hsRequest, final URL targetUrl) throws IOException {
        final String methodName = hsRequest.getMethod();
        final HttpMethod method;
        if ("POST".equalsIgnoreCase(methodName)) {
            PostMethod postMethod = new PostMethod();
            InputStreamRequestEntity inputStreamRequestEntity = new InputStreamRequestEntity(hsRequest.getInputStream());
            postMethod.setRequestEntity(inputStreamRequestEntity);
            method = postMethod;
        } else if ("GET".equalsIgnoreCase(methodName)) {
            method = new GetMethod();
        } else {
            log.warn("Unsupported HTTP method requested: " + hsRequest.getMethod());
            return null;
        }

        method.setFollowRedirects(false);
        method.setPath(targetUrl.getPath());
        method.setQueryString(hsRequest.getQueryString());

        Enumeration e = hsRequest.getHeaderNames();
        if (e != null) {
            while (e.hasMoreElements()) {
                String headerName = (String) e.nextElement();
                if ("content-length".equalsIgnoreCase(headerName)) {
                    //the content-length is managed by the http client
                    continue;
                } else if ("accept-encoding".equalsIgnoreCase(headerName)) {
                    //the accepted encoding should only be those accepted by the http client.
                    //The response stream should (afaik) be deflated. If our http client does not support
                    //gzip then the response can not be unzipped and is delivered wrong.
                    continue;
                }

                Enumeration values = hsRequest.getHeaders(headerName);
                while (values.hasMoreElements()) {
                    String headerValue = (String) values.nextElement();
                    log.info("setting proxy request parameter:" + headerName + ", value: " + headerValue);
                    method.addRequestHeader(headerName, headerValue);
                }
            }
        }

        if (log.isInfoEnabled()) {
            log.info("proxy query string " + method.getQueryString());
        }
        return method;
    }

    private void setupResponseHeaders(HttpMethod httpMethod, HttpServletResponse hsResponse) {
        if (log.isInfoEnabled()) {
            log.info("setupResponseHeaders");
            log.info("status text: " + httpMethod.getStatusText());
            log.info("status line: " + httpMethod.getStatusLine());
        }

        //filter the headers, which are copied from the proxy response. The http lib handles those itself.
        //Filtered out: the content encoding, the content length and cookies
        for (int i = 0; i < httpMethod.getResponseHeaders().length; i++) {
            Header h = httpMethod.getResponseHeaders()[i];
            if ("content-encoding".equalsIgnoreCase(h.getName())) {
                continue;
            } else if ("content-length".equalsIgnoreCase(h.getName())) {
                continue;
            } else if ("transfer-encoding".equalsIgnoreCase(h.getName())) {
                continue;
            } else if (h.getName().toLowerCase().startsWith("set-cookie")) {
                if (replaceSecureCookies) {
                    String cookie = h.getValue().replace(";Secure", "");
                    hsResponse.addHeader(h.getName(), cookie);
                    continue;
                }
            }

            hsResponse.addHeader(h.getName(), h.getValue());
            if (log.isInfoEnabled()) {
                log.info("setting response parameter:" + h.getName() + ", value: " + h.getValue());
            }
        }
        if (httpMethod.getStatusCode() != 200) {
            hsResponse.setStatus(httpMethod.getStatusCode(), httpMethod.getStatusLine().getReasonPhrase());
        }
    }

}


/**
 * @author Gunnar Hillert
 */
class RequestProxyCustomRequestEntity implements RequestEntity {

    private InputStream is = null;
    private long contentLength = 0;
    private String contentType;

    public RequestProxyCustomRequestEntity(InputStream is, long contentLength, String contentType) {
        super();
        this.is = is;
        this.contentLength = contentLength;
        this.contentType = contentType;
    }

    public boolean isRepeatable() {
        return true;
    }

    public String getContentType() {
        return this.contentType;
    }

    public void writeRequest(OutputStream out) throws IOException {

        try {
            int l;
            byte[] buffer = new byte[10240];
            while ((l = is.read(buffer)) != -1) {
                out.write(buffer, 0, l);
            }
        } finally {
            is.close();
        }
    }

    public long getContentLength() {
        return this.contentLength;
    }
}

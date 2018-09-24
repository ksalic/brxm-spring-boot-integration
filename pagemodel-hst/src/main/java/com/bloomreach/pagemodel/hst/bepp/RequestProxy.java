package com.bloomreach.pagemodel.hst.bepp;

import org.apache.commons.io.IOUtils;
import org.apache.http.*;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.*;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.InputStreamEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.BasicHttpClientConnectionManager;
import org.apache.http.util.EntityUtils;
import org.tuckey.web.filters.urlrewrite.utils.Log;
import org.tuckey.web.filters.urlrewrite.utils.StringUtils;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Enumeration;
import java.util.regex.Pattern;

import static org.apache.commons.codec.CharEncoding.UTF_8;

/**
 * This class is responsible for a proxy http request.
 * It takes the incoming request and then it creates a new request to the target address and copies the response of that proxy request
 * to the response of the original request.
 * <p/>
 * This class uses the commons-httpclient classes from Apache.
 * <p/>
 * User: Joachim Ansorg, <jansorg@ksi.gr>
 * Date: 19.06.2008
 * Time: 16:02:54
 */
public final class RequestProxy {
    private static final Log log = Log.getLog(RequestProxy.class);
    private static final Pattern NUMBER_PATTERN = Pattern.compile("[0-9]+");

    public RequestProxy() {
    }

    private String target;
    private String spaSupport;

    public void init(ServletConfig config) {
        target = config.getInitParameter("target");
        log.info("Setting the target URL: " + target);

        spaSupport = config.getInitParameter("spa-support");
        log.info("Setting the spa support URL: " + spaSupport);
    }



    /**
     * This method performs the proxying of the request to the target address.
     *
     * @param hsRequest  The request data which should be send to the
     * @param hsResponse The response data which will contain the data returned by the proxied request to target.
     * @throws java.io.IOException Passed on from the connection logic.
     */
    public  void execute(final HttpServletRequest hsRequest, final HttpServletResponse hsResponse) throws IOException {

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
        URL url;
        try {
            url = new URL(requestTarget);
        } catch (MalformedURLException e) {
            log.error("The provided target url is not valid.", e);
            return;
        }

        log.info("setting up the host configuration");

        RequestConfig.Builder configBuilder = RequestConfig.custom();

        HttpHost proxyHost = getUseProxyServer((String) hsRequest.getAttribute("use-proxy"));
        if (proxyHost != null) configBuilder.setProxy(proxyHost);
        RequestConfig config = configBuilder.build();

        if (log.isInfoEnabled()) {
            log.info("config is " + config.toString());
        }

        final int port = url.getPort() != -1 ? url.getPort() : url.getDefaultPort();
        url = new URL( url.getProtocol(), url.getHost(), port, url.getFile());

        final HttpRequestBase targetRequest = setupProxyRequest(hsRequest, url);
        if (targetRequest == null) {
            log.error("Unsupported request method found: " + hsRequest.getMethod());
            return;
        }

        //perform the request to the target server
        try (CloseableHttpClient client = HttpClients.custom()
                .setDefaultRequestConfig(config)
                .setConnectionManager(new BasicHttpClientConnectionManager())
                .build()) {
            if (log.isInfoEnabled()) {
                log.info("executeMethod / fetching data ...");
            }

            // holder variable, mainly to allow use of try-with-resources below
            HttpUriRequest requestParam = targetRequest;

//            targetRequest.sethe

            if (targetRequest instanceof HttpEntityEnclosingRequestBase) {
                final InputStreamEntity entity = new InputStreamEntity(
                        hsRequest.getInputStream(), hsRequest.getContentLength(), ContentType.create(hsRequest.getContentType()));
                final HttpEntityEnclosingRequestBase entityEnclosingMethod = (HttpEntityEnclosingRequestBase) targetRequest;
                entityEnclosingMethod.setEntity(entity);
                requestParam = entityEnclosingMethod;
            }

            try (CloseableHttpResponse response = client.execute(requestParam)) {

                //copy the target response headers to our response
                setupResponseHeaders(targetRequest, response, hsResponse);

                String source = IOUtils.toString(response.getEntity().getContent(), UTF_8);

                String converted = SpaHtmlUtils.convertToSpaEnabledHtml(source, requestTarget, requestTargetSpaSupport, hsRequest);

                InputStream originalResponseStream = new ByteArrayInputStream(converted.getBytes());
                //the body might be null, i.e. for responses with cache-headers which leave out the body
                if (originalResponseStream != null) {
                    OutputStream responseStream = hsResponse.getOutputStream();
                    copyStream(originalResponseStream, responseStream);
                }
                EntityUtils.consume(response.getEntity());

                log.info("set up response, result code was " + response.getStatusLine().getStatusCode());
            }
        }
    }

    public static void copyStream(InputStream in, OutputStream out) throws IOException {
        byte[] buf = new byte[65536];
        int count;
        while ((count = in.read(buf)) != -1) {
            out.write(buf, 0, count);
        }
    }


    public static HttpHost getUseProxyServer(String useProxyServer) {
        HttpHost proxyHost = null;
        if (useProxyServer != null) {
            String proxyHostStr = useProxyServer;
            int colonIdx = proxyHostStr.indexOf(':');
            if (colonIdx != -1) {
                proxyHostStr = proxyHostStr.substring(0, colonIdx);
                String proxyPortStr = useProxyServer.substring(colonIdx + 1);
                if (proxyPortStr != null && proxyPortStr.length() > 0 && NUMBER_PATTERN.matcher(proxyPortStr).matches()) {
                    int proxyPort = Integer.parseInt(proxyPortStr);
                    proxyHost = new HttpHost(proxyHostStr, proxyPort);
                } else {
                    proxyHost = new HttpHost(proxyHostStr, 80/*default port*/);
                }
            } else {
                proxyHost = new HttpHost(proxyHostStr);
            }
        }
        return proxyHost;
    }

    private static HttpRequestBase setupProxyRequest(final HttpServletRequest hsRequest, final URL targetUrl) throws IOException {
        final String methodName = hsRequest.getMethod();
        final HttpRequestBase method;
        if ("POST".equalsIgnoreCase(methodName)) {
            HttpPost postMethod = new HttpPost();
            HttpEntity inputStreamRequestEntity = new InputStreamEntity(hsRequest.getInputStream());
            postMethod.setEntity(inputStreamRequestEntity);
            method = postMethod;
        } else if ("GET".equalsIgnoreCase(methodName)) {
            method = new HttpGet();
        } else if ("PUT".equalsIgnoreCase(methodName)) {
            HttpPut putMethod = new HttpPut();
            HttpEntity inputStreamRequestEntity = new InputStreamEntity(hsRequest.getInputStream());
            putMethod.setEntity(inputStreamRequestEntity);
            method = putMethod;
        } else if ("DELETE".equalsIgnoreCase(methodName)) {
            method = new HttpDelete();
        } else {
            log.warn("Unsupported HTTP method requested: " + hsRequest.getMethod());
            return null;
        }

        RequestConfig config = RequestConfig.custom()
                .setRedirectsEnabled(false)
                .build();

        method.setConfig(config);
        try {
            method.setURI(targetUrl.toURI());
        }
        catch(URISyntaxException e) {
            throw new IOException(e);
        }

        Enumeration e = hsRequest.getHeaderNames();
        if (e != null) {
            while (e.hasMoreElements()) {
                String headerName = (String) e.nextElement();
                if ("host".equalsIgnoreCase(headerName)) {
                    //the host value is set by the http client
                    continue;
                } else if ("content-length".equalsIgnoreCase(headerName)) {
                    //the content-length is managed by the http client
                    continue;
                } else if ("accept-encoding".equalsIgnoreCase(headerName)) {
                    //the accepted encoding should only be those accepted by the http client.
                    //The response stream should (afaik) be deflated. If our http client does not support
                    //gzip then the response can not be unzipped and is delivered wrong.
                    continue;
                } /*else if (dropCookies && headerName.toLowerCase().startsWith("cookie")) {
                    //fixme : don't set any cookies in the proxied request, this needs a cleaner solution
                    continue;
                }*/

                Enumeration values = hsRequest.getHeaders(headerName);
                while (values.hasMoreElements()) {
                    String headerValue = (String) values.nextElement();
                    log.info("setting proxy request parameter:" + headerName + ", value: " + headerValue);
                    method.addHeader(headerName, headerValue);
                }
            }
        }

        if ( log.isInfoEnabled() ) log.info("proxy query string " + method.getRequestLine());
        return method;
    }

    private static void setupResponseHeaders(HttpRequestBase httpMethod, CloseableHttpResponse httpResponse, HttpServletResponse hsResponse) {
        if ( log.isInfoEnabled() ) {
            log.info("setupResponseHeaders");
            log.info("status text: " + httpResponse.getStatusLine().getReasonPhrase());
            log.info("status line: " + httpResponse.getStatusLine().getStatusCode());
        }

        //filter the headers, which are copied from the proxy response. The http lib handles those itself.
        //Filtered out: the content encoding, the content length and cookies
        for (int i = 0; i < httpMethod.getAllHeaders().length; i++) {
            Header h = httpMethod.getAllHeaders()[i];
            if ("content-encoding".equalsIgnoreCase(h.getName())) {
                continue;
            } else if ("content-length".equalsIgnoreCase(h.getName())) {
                continue;
            } else if ("transfer-encoding".equalsIgnoreCase(h.getName())) {
                continue;
            } /*else if (dropCookies) {
                if (h.getName().toLowerCase().startsWith("cookie")) {
                    //retrieving a cookie which sets the session id will change the calling session: bad! So we skip this header.
                    continue;
                } else if (h.getName().toLowerCase().startsWith("set-cookie")) {
                    //retrieving a cookie which sets the session id will change the calling session: bad! So we skip this header.
                    continue;
                }
            }*/

            hsResponse.addHeader(h.getName(), h.getValue());
            if (log.isInfoEnabled()) {
                log.info("setting response parameter:" + h.getName() + ", value: " + h.getValue());
            }
        }
        //fixme what about the response footers? (httpMethod.getResponseFooters())

        if (httpResponse.getStatusLine().getStatusCode() != 200) {
            hsResponse.setStatus(httpResponse.getStatusLine().getStatusCode());
        }
    }
}
package org.onehippo.connectapp.error;

import com.bloomreach.pagemodel.api.util.PageModelRequestUtils;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler
        extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value
            = {PageModelRequestUtils.UnauthorizedException.class, HttpClientErrorException.class})
    protected ResponseEntity<Object> handleConflict(
            RuntimeException ex, WebRequest request) {
        if (ex instanceof HttpClientErrorException) {
            HttpClientErrorException exception = (HttpClientErrorException)ex;
            if(exception.getStatusCode().equals(HttpStatus.FORBIDDEN)){
                String bodyOfResponse = "Forbidden, only accessible through the Channel Manager";
                return handleExceptionInternal(ex, bodyOfResponse,
                        new HttpHeaders(), HttpStatus.FORBIDDEN, request);
            }
            String bodyOfResponse = "Error";
            return handleExceptionInternal(ex, bodyOfResponse,
                    new HttpHeaders(), exception.getStatusCode(), request);

        }
        String bodyOfResponse = "Forbidden, only accessible through the Channel Manager";
        return handleExceptionInternal(ex, bodyOfResponse,
                new HttpHeaders(), HttpStatus.FORBIDDEN, request);

    }
}

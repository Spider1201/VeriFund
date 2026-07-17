package com.spider.backend.dto;


public class MonnifyTokenResponse {

    private boolean requestSuccessful;
    private String responseMessage;
    private String responseCode;
    private TokenBody responseBody;

    public boolean isRequestSuccessful() {
        return requestSuccessful;
    }

    public void setRequestSuccessful(boolean requestSuccessful) {
        this.requestSuccessful = requestSuccessful;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    public String getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(String responseCode) {
        this.responseCode = responseCode;
    }

    public TokenBody getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(TokenBody responseBody) {
        this.responseBody = responseBody;
    }
}

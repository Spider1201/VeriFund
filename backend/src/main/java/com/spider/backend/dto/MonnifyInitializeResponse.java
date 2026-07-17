package com.spider.backend.dto;

import lombok.Data;

@Data
public class MonnifyInitializeResponse {

    private boolean requestSuccessful;

    private String responseCode;

    private String responseMessage;

    private ResponseBody responseBody;

    @Data
    public static class ResponseBody {

        private String checkoutUrl;

        private String transactionReference;

        private String paymentReference;

    }
}
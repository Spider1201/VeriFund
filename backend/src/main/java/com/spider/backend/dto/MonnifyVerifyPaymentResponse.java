package com.spider.backend.dto;

import lombok.Data;

@Data
public class MonnifyVerifyPaymentResponse {

    private boolean requestSuccessful;
    private String responseMessage;
    private String responseCode;
    private ResponseBody responseBody;

    @Data
    public static class ResponseBody {

        private String paymentStatus;

        private Double amountPaid;

        private String paymentReference;

        private String transactionReference;
    }
}
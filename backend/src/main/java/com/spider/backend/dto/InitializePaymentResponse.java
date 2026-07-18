package com.spider.backend.dto;

import lombok.Data;

@Data
public class InitializePaymentResponse {

    private String checkoutUrl;

    private String paymentReference;

    private String transactionReference;

}
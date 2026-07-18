package com.spider.backend.dto;

import lombok.Data;

@Data
public class VerifyPaymentResponse {

    private boolean paid;

    private String paymentStatus;

    private Double amountPaid;

    private String paymentReference;

    private String transactionReference;

}

package com.spider.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class MonnifyInitializeRequest {

    private Double amount;

    private String customerName;

    private String customerEmail;

    private String paymentReference;

    private String paymentDescription;

    private String currencyCode;

    private String contractCode;

    private String redirectUrl;

    private List<String> paymentMethods;

}
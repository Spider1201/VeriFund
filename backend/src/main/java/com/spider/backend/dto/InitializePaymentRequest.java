package com.spider.backend.dto;

import lombok.Data;

@Data
public class InitializePaymentRequest {

    private String campaignId;

    private Double amount;

    private String donorName;

    private String donorEmail;

}
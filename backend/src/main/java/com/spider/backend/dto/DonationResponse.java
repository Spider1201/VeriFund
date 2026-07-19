package com.spider.backend.dto;

import com.spider.backend.model.PaymentStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class DonationResponse {

    private String id;

    private String campaignId;

    private String donorName;

    private String donorEmail;

    private Double amount;

    private String paymentReference;

    private PaymentStatus paymentStatus;

    private LocalDateTime createdAt;
}
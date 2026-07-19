package com.spider.backend.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class DisbursementRequest {

    private BigDecimal amount;

    private String accountName;

    private String accountNumber;

    private String bankName;
}
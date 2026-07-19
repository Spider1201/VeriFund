package com.spider.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "disbursements")
public class Disbursement {

    @Id
    private String id;

    private String campaignId;

    private BigDecimal amount;

    private String accountName;

    private String accountNumber;

    private String bankName;

    private String reference;

    private String status;

    private LocalDateTime createdAt;
}
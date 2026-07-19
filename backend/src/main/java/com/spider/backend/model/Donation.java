package com.spider.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "donations")
public class Donation {

    @Id
    private String id;

    private String campaignId;

    private String donorName;

    private String donorEmail;

    private Double amount;

    private String paymentReference;

    private PaymentStatus paymentStatus;

    private LocalDateTime createdAt;
}
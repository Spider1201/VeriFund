package com.spider.backend.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CampaignResponse {

    private String id;

    private String name;

    private String campaignTitle;

    private String story;

    private List<String> images;

    private Double amountNeeded;

    private Double amountRaised;

    private Double amountSpent;

    private String category;

    private List<String> supportingDocuments;

    private LocalDate verificationDeadline;

    private String location;

    private LocalDateTime createdAt;
}
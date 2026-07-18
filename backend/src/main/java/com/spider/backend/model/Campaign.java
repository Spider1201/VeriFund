package com.spider.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "campaigns")
public class Campaign {

    @Id
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
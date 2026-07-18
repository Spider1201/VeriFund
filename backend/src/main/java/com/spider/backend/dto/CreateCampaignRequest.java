package com.spider.backend.dto;

import com.spider.backend.model.CampaignStatus;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateCampaignRequest {

    private String name;

    private String campaignTitle;

    private String story;

    private List<String> images;

    private Double amountNeeded;

    private String category;

    private List<String> supportingDocuments;

    private LocalDate verificationDeadline;

    private String location;
}
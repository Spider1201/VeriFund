package com.spider.backend.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DashboardResponse {

    private long totalCampaigns;

    private long approvedCampaigns;

    private long pendingCampaigns;

    private long rejectedCampaigns;

    private long totalDonations;

    private Double totalAmountRaised;

    private Double totalAmountDisbursed;
}
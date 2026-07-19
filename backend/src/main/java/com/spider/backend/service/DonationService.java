package com.spider.backend.service;

import com.spider.backend.dto.DonationRequest;
import com.spider.backend.dto.DonationResponse;

import java.util.List;

public interface DonationService {

    DonationResponse donate(
            String campaignId,
            DonationRequest request
    );

    List<DonationResponse> getCampaignDonations(
            String campaignId
    );

    List<DonationResponse> getAllDonations();
}
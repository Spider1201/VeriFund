package com.spider.backend.service;

import com.spider.backend.dto.DonationRequest;
import com.spider.backend.dto.DonationResponse;
import com.spider.backend.dto.VerifyPaymentResponse;

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

    VerifyPaymentResponse verifyDonationPayment(String transactionReference);
}
package com.spider.backend.controller;

import com.spider.backend.dto.DonationRequest;
import com.spider.backend.dto.DonationResponse;
import com.spider.backend.dto.VerifyPaymentResponse;
import com.spider.backend.service.DonationService;
import com.spider.backend.service.MonnifyService;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donations")
public class DonationController {

    private final DonationService donationService;
    private final MonnifyService monnifyService;

    public DonationController(DonationService donationService, MonnifyService monnifyService) {
        this.donationService = donationService;
        this.monnifyService = monnifyService;
    }

    // Make a donation
    @PostMapping("/{campaignId}")
    public DonationResponse donate(
            @PathVariable String campaignId,
            @Valid @RequestBody DonationRequest request
    ) {
        return donationService.donate(campaignId, request);
    }

    // Get all donations for a campaign
    @GetMapping("/campaign/{campaignId}")
    public List<DonationResponse> getCampaignDonations(
            @PathVariable String campaignId
    ) {
        return donationService.getCampaignDonations(campaignId);
    }

    @GetMapping("/verify/{paymentReference}")
    public VerifyPaymentResponse verifyPayment(
            @PathVariable String paymentReference) {

        return donationService.verifyDonationPayment(paymentReference);
    }

    // Admin: Get all donations
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<DonationResponse> getAllDonations() {
        return donationService.getAllDonations();
    }
}
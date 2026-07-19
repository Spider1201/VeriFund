package com.spider.backend.service;

import com.spider.backend.dto.DonationRequest;
import com.spider.backend.dto.DonationResponse;
import com.spider.backend.model.Campaign;
import com.spider.backend.model.CampaignStatus;
import com.spider.backend.model.Donation;
import com.spider.backend.model.PaymentStatus;
import com.spider.backend.repository.CampaignRepository;
import com.spider.backend.repository.DonationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class DonationServiceImpl implements DonationService {

    private final CampaignRepository campaignRepository;
    private final DonationRepository donationRepository;

    public DonationServiceImpl(
            CampaignRepository campaignRepository,
            DonationRepository donationRepository
    ) {
        this.campaignRepository = campaignRepository;
        this.donationRepository = donationRepository;
    }

    @Override
    public DonationResponse donate(
            String campaignId,
            DonationRequest request
    ) {

        Campaign campaign = campaignRepository.findById(campaignId)
                .orElseThrow(() ->
                        new RuntimeException("Campaign not found"));

        if (campaign.getStatus() != CampaignStatus.APPROVED) {
            throw new RuntimeException("Campaign has not been approved");
        }

        Donation donation = Donation.builder()
                .campaignId(campaignId)
                .donorName(request.getDonorName())
                .donorEmail(request.getDonorEmail())
                .amount(request.getAmount())
                .paymentReference(UUID.randomUUID().toString())
                .paymentStatus(PaymentStatus.SUCCESSFUL)
                .createdAt(LocalDateTime.now())
                .build();

        donationRepository.save(donation);

        campaign.setAmountRaised(
                campaign.getAmountRaised() + request.getAmount()
        );

        campaignRepository.save(campaign);

        return mapToResponse(donation);
    }

    @Override
    public List<DonationResponse> getCampaignDonations(String campaignId) {

        return donationRepository.findByCampaignId(campaignId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<DonationResponse> getAllDonations() {

        return donationRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private DonationResponse mapToResponse(Donation donation) {

        return DonationResponse.builder()
                .id(donation.getId())
                .campaignId(donation.getCampaignId())
                .donorName(donation.getDonorName())
                .donorEmail(donation.getDonorEmail())
                .amount(donation.getAmount())
                .paymentReference(donation.getPaymentReference())
                .paymentStatus(donation.getPaymentStatus())
                .createdAt(donation.getCreatedAt())
                .build();
    }
}
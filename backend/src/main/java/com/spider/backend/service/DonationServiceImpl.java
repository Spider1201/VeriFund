package com.spider.backend.service;

import com.spider.backend.dto.*;
import com.spider.backend.model.Campaign;
import com.spider.backend.model.CampaignStatus;
import com.spider.backend.model.Donation;
import com.spider.backend.model.PaymentStatus;
import com.spider.backend.repository.CampaignRepository;
import com.spider.backend.repository.DonationRepository;
import org.springframework.stereotype.Service;
import com.spider.backend.dto.VerifyPaymentResponse;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class DonationServiceImpl implements DonationService {

    private final CampaignRepository campaignRepository;
    private final DonationRepository donationRepository;
    private final MonnifyService monnifyService;

    public DonationServiceImpl(
            CampaignRepository campaignRepository,
            DonationRepository donationRepository,
            MonnifyService monnifyService) {
        this.campaignRepository = campaignRepository;
        this.donationRepository = donationRepository;
        this.monnifyService = monnifyService;
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

        InitializePaymentRequest paymentRequest = new InitializePaymentRequest();

        paymentRequest.setAmount(request.getAmount());
        paymentRequest.setDonorName(request.getDonorName());
        paymentRequest.setDonorEmail(request.getDonorEmail());

        InitializePaymentResponse paymentResponse =
                monnifyService.initializePayment(paymentRequest);

        Donation donation = Donation.builder()
                .campaignId(campaignId)
                .donorName(request.getDonorName())
                .donorEmail(request.getDonorEmail())
                .amount(request.getAmount())
                .paymentReference(paymentResponse.getPaymentReference())
                .transactionReference(paymentResponse.getTransactionReference())
                .paymentStatus(PaymentStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .build();

        donationRepository.save(donation);

        return mapToResponse(donation, paymentResponse);
    }

    @Override
    public VerifyPaymentResponse verifyDonationPayment(String paymentReference) {

        Donation donation = donationRepository
                .findByPaymentReference(paymentReference)
                .orElseThrow(() ->
                        new RuntimeException("Donation not found"));

        VerifyPaymentResponse response =
                monnifyService.verifyPayment(
                        donation.getTransactionReference()
                );

        if (response.isPaid()
                && donation.getPaymentStatus() == PaymentStatus.PENDING) {

            donation.setPaymentStatus(PaymentStatus.SUCCESSFUL);

            Campaign campaign = campaignRepository
                    .findById(donation.getCampaignId())
                    .orElseThrow(() ->
                            new RuntimeException("Campaign not found"));

            campaign.setAmountRaised(
                    campaign.getAmountRaised() + donation.getAmount()
            );

            campaignRepository.save(campaign);
            donationRepository.save(donation);
        }

        return response;
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

    private DonationResponse mapToResponse(
            Donation donation,
            InitializePaymentResponse paymentResponse
    ) {

        return DonationResponse.builder()
                .id(donation.getId())
                .campaignId(donation.getCampaignId())
                .donorName(donation.getDonorName())
                .donorEmail(donation.getDonorEmail())
                .amount(donation.getAmount())
                .paymentReference(donation.getPaymentReference())
                .transactionReference(donation.getTransactionReference())
                .paymentStatus(donation.getPaymentStatus())
                .checkoutUrl(paymentResponse.getCheckoutUrl())
                .createdAt(donation.getCreatedAt())
                .build();
    }

    private DonationResponse mapToResponse(Donation donation) {

        return DonationResponse.builder()
                .id(donation.getId())
                .campaignId(donation.getCampaignId())
                .donorName(donation.getDonorName())
                .donorEmail(donation.getDonorEmail())
                .amount(donation.getAmount())
                .paymentReference(donation.getPaymentReference())
                .transactionReference(donation.getTransactionReference())
                .paymentStatus(donation.getPaymentStatus())
                .createdAt(donation.getCreatedAt())
                .build();
    }
}
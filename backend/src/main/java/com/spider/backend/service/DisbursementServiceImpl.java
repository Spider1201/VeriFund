package com.spider.backend.service;

import com.spider.backend.dto.DisbursementRequest;
import com.spider.backend.model.Campaign;
import com.spider.backend.model.Disbursement;
import com.spider.backend.model.CampaignStatus;
import com.spider.backend.repository.CampaignRepository;
import com.spider.backend.repository.DisbursementRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class DisbursementServiceImpl implements DisbursementService {

    private final CampaignRepository campaignRepository;
    private final DisbursementRepository disbursementRepository;

    public DisbursementServiceImpl(
            CampaignRepository campaignRepository,
            DisbursementRepository disbursementRepository
    ) {
        this.campaignRepository = campaignRepository;
        this.disbursementRepository = disbursementRepository;
    }

    @Override
    public Disbursement disburse(
            String campaignId,
            DisbursementRequest request
    ) {

        Campaign campaign = campaignRepository.findById(campaignId)
                .orElseThrow(() ->
                        new RuntimeException("Campaign not found"));

        // Only approved campaigns can receive disbursement
        if (campaign.getStatus() != CampaignStatus.APPROVED) {
            throw new RuntimeException("Campaign has not been approved");
        }

        // Cannot spend more than what has been raised
        Double amountRaised = campaign.getAmountRaised() == null
                ? 0.0
                : campaign.getAmountRaised();

        Double amountSpent = campaign.getAmountSpent() == null
                ? 0.0
                : campaign.getAmountSpent();

        if (request.getAmount().doubleValue() > amountRaised) {
            throw new RuntimeException("Insufficient campaign balance");
        }

        Disbursement disbursement = Disbursement.builder()
                .campaignId(campaignId)
                .amount(request.getAmount())
                .accountName(request.getAccountName())
                .accountNumber(request.getAccountNumber())
                .bankName(request.getBankName())
                .reference(UUID.randomUUID().toString())
                .status("COMPLETED")
                .createdAt(LocalDateTime.now())
                .build();

        disbursementRepository.save(disbursement);

        // Update campaign amount spent
        campaign.setAmountSpent(
                amountSpent + request.getAmount().doubleValue()
        );

        campaign.setAmountRaised(
                amountRaised - request.getAmount().doubleValue()
        );

        campaignRepository.save(campaign);

        return disbursement;
    }
}
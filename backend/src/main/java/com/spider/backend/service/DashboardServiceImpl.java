package com.spider.backend.service;

import com.spider.backend.dto.DashboardResponse;
import com.spider.backend.model.Campaign;
import com.spider.backend.model.CampaignStatus;
import com.spider.backend.model.Disbursement;
import com.spider.backend.model.Donation;
import com.spider.backend.repository.CampaignRepository;
import com.spider.backend.repository.DisbursementRepository;
import com.spider.backend.repository.DonationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final CampaignRepository campaignRepository;
    private final DonationRepository donationRepository;
    private final DisbursementRepository disbursementRepository;

    public DashboardServiceImpl(
            CampaignRepository campaignRepository,
            DonationRepository donationRepository,
            DisbursementRepository disbursementRepository
    ) {
        this.campaignRepository = campaignRepository;
        this.donationRepository = donationRepository;
        this.disbursementRepository = disbursementRepository;
    }

    @Override
    public DashboardResponse getDashboard() {

        long totalCampaigns = campaignRepository.count();

        long approvedCampaigns =
                campaignRepository.countByStatus(CampaignStatus.APPROVED);

        long pendingCampaigns =
                campaignRepository.countByStatus(CampaignStatus.PENDING);

        long rejectedCampaigns =
                campaignRepository.countByStatus(CampaignStatus.REJECTED);

        long totalDonations = donationRepository.count();

        List<Campaign> campaigns = campaignRepository.findAll();

        double totalRaised = campaigns.stream()
                .mapToDouble(Campaign::getAmountRaised)
                .sum();

        List<Disbursement> disbursements =
                disbursementRepository.findAll();

        double totalDisbursed = disbursements.stream()
                .mapToDouble(disbursement ->
                        disbursement.getAmount() == null
                                ? 0.0
                                : disbursement.getAmount().doubleValue())
                .sum();

        return DashboardResponse.builder()
                .totalCampaigns(totalCampaigns)
                .approvedCampaigns(approvedCampaigns)
                .pendingCampaigns(pendingCampaigns)
                .rejectedCampaigns(rejectedCampaigns)
                .totalDonations(totalDonations)
                .totalAmountRaised(totalRaised)
                .totalAmountDisbursed(totalDisbursed)
                .build();
    }
}
package com.spider.backend.service;

import com.spider.backend.dto.CampaignResponse;
import com.spider.backend.dto.CreateCampaignRequest;
import com.spider.backend.model.Campaign;
import com.spider.backend.model.CampaignStatus;
import com.spider.backend.repository.CampaignRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CampaignServiceImpl implements CampaignService {

    private final CampaignRepository campaignRepository;

    public CampaignServiceImpl(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    @Override
    public CampaignResponse createCampaign(CreateCampaignRequest request) {

        Campaign campaign = Campaign.builder()
                .name(request.getName())
                .campaignTitle(request.getCampaignTitle())
                .story(request.getStory())
                .images(request.getImages())
                .amountNeeded(request.getAmountNeeded())
                .amountRaised(0.0)
                .amountSpent(0.0)
                .category(request.getCategory())
                .supportingDocuments(request.getSupportingDocuments())
                .verificationDeadline(request.getVerificationDeadline())
                .location(request.getLocation())
                .status(CampaignStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .build();

        Campaign savedCampaign = campaignRepository.save(campaign);

        return mapToResponse(savedCampaign);
    }

    @Override
    public List<CampaignResponse> getAllCampaigns() {

        return campaignRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public CampaignResponse getCampaignById(String id) {

        Campaign campaign = campaignRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Campaign not found"));

        return mapToResponse(campaign);
    }

    @Override
    public CampaignResponse updateCampaign(String id, CreateCampaignRequest request) {

        Campaign campaign = campaignRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Campaign not found"));

        campaign.setName(request.getName());
        campaign.setCampaignTitle(request.getCampaignTitle());
        campaign.setStory(request.getStory());
        campaign.setImages(request.getImages());
        campaign.setAmountNeeded(request.getAmountNeeded());
        campaign.setCategory(request.getCategory());
        campaign.setSupportingDocuments(request.getSupportingDocuments());
        campaign.setVerificationDeadline(request.getVerificationDeadline());
        campaign.setLocation(request.getLocation());

        Campaign updatedCampaign = campaignRepository.save(campaign);

        return mapToResponse(updatedCampaign);
    }

    @Override
    public void deleteCampaign(String id) {

        campaignRepository.deleteById(id);
    }

    private CampaignResponse mapToResponse(Campaign campaign) {

        return CampaignResponse.builder()
                .id(campaign.getId())
                .name(campaign.getName())
                .campaignTitle(campaign.getCampaignTitle())
                .story(campaign.getStory())
                .images(campaign.getImages())
                .amountNeeded(campaign.getAmountNeeded())
                .amountRaised(campaign.getAmountRaised())
                .amountSpent(campaign.getAmountSpent())
                .category(campaign.getCategory())
                .supportingDocuments(campaign.getSupportingDocuments())
                .verificationDeadline(campaign.getVerificationDeadline())
                .location(campaign.getLocation())
                .status(campaign.getStatus())
                .createdAt(campaign.getCreatedAt())
                .build();
    }
}
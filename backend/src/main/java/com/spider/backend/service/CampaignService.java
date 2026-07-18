package com.spider.backend.service;

import com.spider.backend.dto.CampaignResponse;
import com.spider.backend.dto.CreateCampaignRequest;
import com.spider.backend.model.Campaign;


import java.util.List;

public interface CampaignService {
    CampaignResponse createCampaign(CreateCampaignRequest request);

    List<CampaignResponse> getAllCampaigns();

    CampaignResponse getCampaignById(String id);

    CampaignResponse updateCampaign(String id, CreateCampaignRequest request);

    CampaignResponse approveCampaign(String id);

    CampaignResponse rejectCampaign(String id);

    void deleteCampaign(String id);
}
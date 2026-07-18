package com.spider.backend.controller;

import com.spider.backend.dto.CampaignResponse;
import com.spider.backend.dto.CreateCampaignRequest;
import com.spider.backend.service.CampaignService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/campaigns")
public class CampaignController {

    private final CampaignService campaignService;

    public CampaignController(CampaignService campaignService) {
        this.campaignService = campaignService;
    }

    @PostMapping
    public CampaignResponse createCampaign(
            @RequestBody CreateCampaignRequest request) {

        return campaignService.createCampaign(request);
    }

    @GetMapping
    public List<CampaignResponse> getAllCampaigns() {

        return campaignService.getAllCampaigns();
    }

    @GetMapping("/{id}")
    public CampaignResponse getCampaignById(
            @PathVariable String id) {

        return campaignService.getCampaignById(id);
    }

    @PutMapping("/{id}")
    public CampaignResponse updateCampaign(
            @PathVariable String id,
            @RequestBody CreateCampaignRequest request) {

        return campaignService.updateCampaign(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteCampaign(
            @PathVariable String id) {

        campaignService.deleteCampaign(id);
    }

    @PutMapping("/{id}/approve")
    public CampaignResponse approveCampaign(@PathVariable String id) {
        return campaignService.approveCampaign(id);
    }

    @PutMapping("/{id}/reject")
    public CampaignResponse rejectCampaign(@PathVariable String id) {
        return campaignService.rejectCampaign(id);
    }
}
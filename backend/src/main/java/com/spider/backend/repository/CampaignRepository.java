package com.spider.backend.repository;

import com.spider.backend.model.Campaign;
import com.spider.backend.model.CampaignStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CampaignRepository extends MongoRepository<Campaign, String> {

    long countByStatus(CampaignStatus status);

}
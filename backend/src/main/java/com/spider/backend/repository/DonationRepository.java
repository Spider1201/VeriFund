package com.spider.backend.repository;

import com.spider.backend.model.Donation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface DonationRepository extends MongoRepository<Donation, String> {

    List<Donation> findByCampaignId(String campaignId);

    Optional<Donation> findByTransactionReference(String transactionReference);

}
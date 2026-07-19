package com.spider.backend.repository;

import com.spider.backend.model.Disbursement;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DisbursementRepository
        extends MongoRepository<Disbursement, String> {
}
package com.spider.backend.service;

import com.spider.backend.dto.DisbursementRequest;
import com.spider.backend.model.Disbursement;

public interface DisbursementService {

    Disbursement disburse(
            String campaignId,
            DisbursementRequest request
    );
}
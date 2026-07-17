package com.spider.backend.service;

import com.spider.backend.dto.InitializePaymentRequest;
import com.spider.backend.dto.InitializePaymentResponse;
import com.spider.backend.dto.MonnifyTokenResponse;

public interface MonnifyService {

    MonnifyTokenResponse getAccessToken();

    InitializePaymentResponse initializePayment(
            InitializePaymentRequest request);

}
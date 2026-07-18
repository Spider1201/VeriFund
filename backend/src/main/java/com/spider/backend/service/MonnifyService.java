package com.spider.backend.service;

import com.spider.backend.dto.InitializePaymentRequest;
import com.spider.backend.dto.InitializePaymentResponse;
import com.spider.backend.dto.MonnifyTokenResponse;
import com.spider.backend.dto.VerifyPaymentResponse;

public interface MonnifyService {

    MonnifyTokenResponse getAccessToken();

    InitializePaymentResponse initializePayment(
            InitializePaymentRequest request);

    VerifyPaymentResponse verifyPayment(
            String transactionReference);

}
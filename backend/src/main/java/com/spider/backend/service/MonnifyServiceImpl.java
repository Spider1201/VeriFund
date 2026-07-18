package com.spider.backend.service;

import com.spider.backend.dto.*;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.beans.factory.annotation.Value;

import com.spider.backend.dto.MonnifyTokenResponse;
import org.springframework.http.HttpHeaders;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import java.util.List;
@Service
public class MonnifyServiceImpl implements MonnifyService {

    private final WebClient webClient;

    @Value("${monnify.base.url}")
    private String baseUrl;

    @Value("${monnify.api-key}")
    private String apiKey;

    @Value("${monnify.secret-key}")
    private String secretKey;

    @Value("${monnify.contract-code}")
    private String contractCode;

    public MonnifyServiceImpl(WebClient webClient) {
        this.webClient = webClient;
    }

    @Override
    public MonnifyTokenResponse getAccessToken() {

        String credentials = apiKey + ":" + secretKey;

        String encodedCredentials = Base64.getEncoder()
                .encodeToString(credentials.getBytes(StandardCharsets.UTF_8));

        return webClient
                .post()
                .uri(baseUrl + "/api/v1/auth/login")
                .header(HttpHeaders.AUTHORIZATION, "Basic " + encodedCredentials)
                .retrieve()
                .bodyToMono(MonnifyTokenResponse.class)
                .block();
    }

    @Override
    public InitializePaymentResponse initializePayment(InitializePaymentRequest request) {
        String paymentReference = "VF-" + System.currentTimeMillis();

        MonnifyInitializeRequest monnifyRequest = new MonnifyInitializeRequest();

        MonnifyTokenResponse tokenResponse = getAccessToken();

        String accessToken = tokenResponse
                .getResponseBody()
                .getAccessToken();

        monnifyRequest.setAmount(request.getAmount());
        monnifyRequest.setCustomerName(request.getDonorName());
        monnifyRequest.setCustomerEmail(request.getDonorEmail());
        monnifyRequest.setPaymentReference(paymentReference);
        monnifyRequest.setPaymentDescription("Donation");
        monnifyRequest.setCurrencyCode("NGN");
        monnifyRequest.setContractCode(contractCode);
        monnifyRequest.setRedirectUrl("http://localhost:5173/payment-success");

        monnifyRequest.setPaymentMethods(
                List.of("CARD", "ACCOUNT_TRANSFER"));

        MonnifyInitializeResponse response = webClient
                .post()
                .uri(baseUrl + "/api/v1/merchant/transactions/init-transaction")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(monnifyRequest)
                .retrieve()
                .bodyToMono(MonnifyInitializeResponse.class)
                .block();

        InitializePaymentResponse paymentResponse = new InitializePaymentResponse();

        paymentResponse.setCheckoutUrl(
                response.getResponseBody().getCheckoutUrl());

        paymentResponse.setPaymentReference(
                response.getResponseBody().getPaymentReference());

        paymentResponse.setTransactionReference(
                response.getResponseBody().getTransactionReference());

        return paymentResponse;
    }

        @Override
        public VerifyPaymentResponse verifyPayment(String transactionReference) {

            MonnifyTokenResponse tokenResponse = getAccessToken();

            String accessToken = tokenResponse
                    .getResponseBody()
                    .getAccessToken();

            MonnifyVerifyPaymentResponse response = webClient
                    .get()
                    .uri(uriBuilder -> uriBuilder
                            .scheme("https")
                            .host("sandbox.monnify.com")
                            .path("/api/v2/merchant/transactions/query")
                            .queryParam("transactionReference", transactionReference)
                            .build())
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                    .retrieve()
                    .bodyToMono(MonnifyVerifyPaymentResponse.class)
                    .block();

            if (response == null || response.getResponseBody() == null) {
                throw new RuntimeException("Unable to verify payment.");
            }

            VerifyPaymentResponse verifyResponse = new VerifyPaymentResponse();

            verifyResponse.setPaid(
                    "PAID".equalsIgnoreCase(response.getResponseBody().getPaymentStatus())
            );

            verifyResponse.setPaymentStatus(
                    response.getResponseBody().getPaymentStatus()
            );

            verifyResponse.setAmountPaid(
                    response.getResponseBody().getAmountPaid()
            );

            verifyResponse.setPaymentReference(
                    response.getResponseBody().getPaymentReference()
            );

            verifyResponse.setTransactionReference(
                    response.getResponseBody().getTransactionReference()
            );

            return verifyResponse;
        }
    }
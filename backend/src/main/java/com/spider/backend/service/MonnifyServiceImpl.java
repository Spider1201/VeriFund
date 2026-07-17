package com.spider.backend.service;

import com.spider.backend.dto.MonnifyTokenResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.beans.factory.annotation.Value;

import com.spider.backend.dto.MonnifyTokenResponse;
import org.springframework.http.HttpHeaders;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
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
}
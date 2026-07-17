package com.spider.backend.controller;

import com.spider.backend.dto.InitializePaymentRequest;
import com.spider.backend.dto.InitializePaymentResponse;
import com.spider.backend.dto.MonnifyTokenResponse;
import com.spider.backend.service.MonnifyService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/monnify")
public class MonnifyController {

    private final MonnifyService monnifyService;

    public MonnifyController(MonnifyService monnifyService) {
        this.monnifyService = monnifyService;
    }

    @GetMapping("/token")
    public MonnifyTokenResponse getToken() {
        return monnifyService.getAccessToken();
    }

    @PostMapping("/initialize")
    public InitializePaymentResponse initializePayment(
            @RequestBody InitializePaymentRequest request){

        return monnifyService.initializePayment(request);

    }
}
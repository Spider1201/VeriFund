package com.spider.backend.controller;

import com.spider.backend.dto.DisbursementRequest;
import com.spider.backend.model.Disbursement;
import com.spider.backend.service.DisbursementService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/disbursements")
public class DisbursementController {

    private final DisbursementService disbursementService;

    public DisbursementController(DisbursementService disbursementService) {
        this.disbursementService = disbursementService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{campaignId}")
    public Disbursement disburse(

            @PathVariable String campaignId,

            @RequestBody DisbursementRequest request
    ) {

        return disbursementService.disburse(
                campaignId,
                request
        );
    }
    @GetMapping("/test-admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String testAdmin() {
        return "ADMIN OK";
    }
}
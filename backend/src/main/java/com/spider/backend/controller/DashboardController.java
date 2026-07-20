package com.spider.backend.controller;

import com.spider.backend.dto.DashboardResponse;
import com.spider.backend.service.DashboardService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/dashboard")
    public DashboardResponse getDashboard() {
        return dashboardService.getDashboard();
    }
}
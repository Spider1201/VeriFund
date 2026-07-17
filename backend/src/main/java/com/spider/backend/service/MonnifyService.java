package com.spider.backend.service;

import com.spider.backend.dto.MonnifyTokenResponse;

public interface MonnifyService {

    MonnifyTokenResponse getAccessToken();

}
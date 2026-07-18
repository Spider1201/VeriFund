package com.spider.backend.service;

import com.spider.backend.dto.AuthResponse;
import com.spider.backend.dto.LoginRequest;
import com.spider.backend.dto.RegisterRequest;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

}
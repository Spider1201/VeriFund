package com.spider.backend.service;

import com.spider.backend.model.User;

public interface JwtService {

    String generateToken(User user);

    String extractUsername(String token);

    boolean isTokenValid(String token, User user);

}
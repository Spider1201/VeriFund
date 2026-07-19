package com.spider.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DonationRequest {

    @NotBlank
    private String donorName;

    @Email
    @NotBlank
    private String donorEmail;

    @NotNull
    private Double amount;
}
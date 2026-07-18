package com.spider.backend.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ImageUploadService {

    List<String> uploadImages(MultipartFile[] files);

}
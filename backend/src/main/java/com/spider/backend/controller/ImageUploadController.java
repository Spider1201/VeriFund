package com.spider.backend.controller;

import com.spider.backend.service.ImageUploadService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/upload")
public class ImageUploadController {

    private final ImageUploadService imageUploadService;

    public ImageUploadController(ImageUploadService imageUploadService) {
        this.imageUploadService = imageUploadService;
    }

    @PostMapping(
            value = "/images",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public Map<String, List<String>> uploadImages(
            @RequestPart("images") MultipartFile[] images) {

        return Map.of(
                "imageUrls",
                imageUploadService.uploadImages(images)
        );
    }
}
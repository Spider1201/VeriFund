package com.spider.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.List;


@Service
public class ImageUploadServiceImpl implements ImageUploadService {

    private final Cloudinary cloudinary;

    public ImageUploadServiceImpl(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    @Override
    public List<String> uploadImages(MultipartFile[] files) {

        List<String> imageUrls = new ArrayList<>();

        try {

            for (MultipartFile file : files) {

                Map<?, ?> uploadResult = cloudinary.uploader()
                        .upload(file.getBytes(), ObjectUtils.emptyMap());

                imageUrls.add(uploadResult.get("secure_url").toString());
            }

            return imageUrls;

        } catch (IOException e) {

            throw new RuntimeException("Image upload failed", e);

        }
    }
}
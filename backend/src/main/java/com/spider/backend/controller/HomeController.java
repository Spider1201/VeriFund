package com.spider.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "http://localhost:5173")
@Controller
public class HomeController {

    @CrossOrigin(origins = "")
    @GetMapping("/")
    public String home(){
        return "redirect:/swagger-ui/index.html";
    }

}

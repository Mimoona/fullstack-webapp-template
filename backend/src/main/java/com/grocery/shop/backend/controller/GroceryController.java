package com.grocery.shop.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/grocery-shop")
public class GroceryController {

    @GetMapping("/greet")
    public String getGreet(){
        return "hello";
    }
}
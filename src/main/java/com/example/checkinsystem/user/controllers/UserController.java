package com.example.checkinsystem.user.controllers;

import com.example.checkinsystem.user.models.User;
import com.example.checkinsystem.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;

@RestController
public class UserController {

//    @Value("${app.version}")
//    private String version;
//    @GetMapping("/version")
//    public String getVersion() {
//        return "Application is up! On version: " + version;
//    }

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{$email}")
    public User getUserByEmail(String email) {
        return userService.findByEmail(email);
    }

    public User getUserById(Long id) {
        return userService.findById(id);
    }



}

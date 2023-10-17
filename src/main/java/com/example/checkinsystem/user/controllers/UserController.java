package com.example.checkinsystem.user.controllers;

import com.example.checkinsystem.user.models.User;
import com.example.checkinsystem.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")         /* CORS reference: https://reflectoring.io/spring-cors/ */
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable("email") String email) {
        return userService.findUserByEmail(email);
    }

    @GetMapping("/id/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return userService.findUserById(id);
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userService.createNewUser(user);
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }
}

package com.example.checkinsystem.user.service;

import com.example.checkinsystem.user.models.User;
import com.example.checkinsystem.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("Email does not exist!"));
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User does not exist by provided ID! :-("));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();        // JPA Repository dependency has built in method of .findAll() which returns a Collections<List>!
    }

    public User createNewUser(User user) {
        return userRepository.save(user);
    }
}

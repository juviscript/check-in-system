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


    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("Account does not exist with that email!"));
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User does not exist by provided ID! :-("));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();        // JPA Repository dependency has built in method of .findAll() which returns a Collections<List>!
    }

    public User createNewUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalStateException("Email already registered to another user.");
        }
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (userRepository.findById(id).isPresent()) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalStateException("User does not exist.");
        }
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }
}

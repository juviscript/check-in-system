package com.example.checkinsystem.checkin.service;

import com.example.checkinsystem.checkin.models.CheckInEntry;
import com.example.checkinsystem.checkin.repository.CheckInRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckInService {

    @Autowired
    private CheckInRepository checkInRepository;

    public List<CheckInEntry> getAllEntries() {
        return checkInRepository.findAll();
    }

    public CheckInEntry getEntryById(Long id) {
        return checkInRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Entry not found."));
    }

    public CheckInEntry getEntryByEmail(String email) {
        return checkInRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("No check-in entries associated with email. Double check the spelling and try again, or check in again!"));
    }

    public CheckInEntry getEntryByLastName(String lastName) {
        return checkInRepository.findByLastName(lastName).orElseThrow(() -> new IllegalArgumentException("No check-in entries associated with last name. Double check the spelling and try again, or check in again!"));
    }

    public CheckInEntry updateEntry(CheckInEntry entry) {
        return checkInRepository.save(entry);
    }

    public CheckInEntry createNewEntry(CheckInEntry entry) {
        if (checkInRepository.findByEmail(entry.getEmail()).isPresent()) {
            throw new IllegalStateException("Email already registered to another user.");
        }

        return checkInRepository.save(entry);
    }

    public void deleteEntry(Long id) {
        if (checkInRepository.findById(id).isPresent()) {
            checkInRepository.deleteById(id);
        } else {
            throw new IllegalStateException("User does not exist.");
        }
    }
}

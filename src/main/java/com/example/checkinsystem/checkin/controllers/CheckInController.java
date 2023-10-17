package com.example.checkinsystem.checkin.controllers;

import com.example.checkinsystem.checkin.models.CheckInEntry;
import com.example.checkinsystem.checkin.service.CheckInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/check-in")
public class CheckInController {

    @Autowired
    private CheckInService checkInService;

    @GetMapping("/entries/all")
    public List<CheckInEntry> getAllEntries() {
        return checkInService.getAllEntries();
    }

    @GetMapping("/entries/{email}")
    public CheckInEntry getEntryByEmail(@PathVariable("email") String email) {
        return checkInService.getEntryByEmail(email);
    }

    @GetMapping("/entries/{id}")
    public CheckInEntry getEntryById(@PathVariable("id") Long id) {
        return checkInService.getEntryById(id);
    }

    @PostMapping("/entries")
    public CheckInEntry createNewEntry(@RequestBody CheckInEntry entry) {
        return checkInService.createNewEntry(entry);
    }

    @DeleteMapping("/entries/{id}")
    public void deleteEntry(@PathVariable("id") Long id) {
        checkInService.deleteEntry(id);
    }

}

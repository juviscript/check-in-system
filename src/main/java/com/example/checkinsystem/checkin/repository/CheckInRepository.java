package com.example.checkinsystem.checkin.repository;

import com.example.checkinsystem.checkin.models.CheckInEntry;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Transactional
public interface CheckInRepository extends JpaRepository<CheckInEntry, Long> {
    Optional<CheckInEntry> findByEmail(String email);
    Optional<CheckInEntry> findByLastName(String lastName);
}

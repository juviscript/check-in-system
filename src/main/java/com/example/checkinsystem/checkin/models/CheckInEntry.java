package com.example.checkinsystem.checkin.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "check_in_entries")
@Getter
@Setter
public class CheckInEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    @Column
    public String firstName;
    @Column
    public String lastName;
    @Column
    public String email;
    @Column
    public String phoneNumber;
    @Column
    @Enumerated(EnumType.STRING)
    public CheckInDescription reasonForVisit;
    @Column
    public boolean checkedIn = false;
    @Column
    public LocalDateTime checkInDateTime = LocalDateTime.now();

}

/*
*
*/

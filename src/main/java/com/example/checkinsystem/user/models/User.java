package com.example.checkinsystem.user.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_registration")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  /* Increments by 1 versus GenerationType.AUTO generates random value. */
    private Long id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String password;

    /*
        Future implementation to create an email validation component.
        Adding additional fields such as "locked" and "unlocked" when successfully verified.
    */
}

package com.example.checkinsystem.checkin.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum CheckInDescription {
    SLEEPY,
    TIRED,
    HUNGRY,
    ITCHY

}

/* https://www.baeldung.com/jackson-serialize-enums for accessing as object and serializing as JSON objects. */
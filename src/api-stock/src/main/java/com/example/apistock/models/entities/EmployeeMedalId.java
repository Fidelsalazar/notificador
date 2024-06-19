package com.example.apistock.models.entities;

import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class EmployeeMedalId implements Serializable {

  private Long employeeId;
  private Long medalId;
}

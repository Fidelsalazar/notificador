package com.example.apistock.models.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employee_medal")
public class EmployeeMedal {

  @EmbeddedId
  private EmployeeMedalId id;

  @ManyToOne
  @MapsId("employeeId") // Esto debe coincidir con el nombre del atributo en EmployeeMedalId
  @JoinColumn(name = "employee_id")
  private Employee employee;

  @ManyToOne
  @MapsId("medalId") // Esto debe coincidir con el nombre del atributo en EmployeeMedalId
  @JoinColumn(name = "medal_id")
  private Medal medal;

  @Column
  private String status;

  @Column
  private Date fechaEntrega;

  @Column
  private Date fechaSolicitud;
}


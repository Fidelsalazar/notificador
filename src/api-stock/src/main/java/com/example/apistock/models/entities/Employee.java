package com.example.apistock.models.entities;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
public class Employee {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Long idEmpleado;
  private String noCI;
  private String nombre;
  private String apellido1;
  private String apellido2;
  private boolean cuadro;
  private Date fechaEntrada;
  private Date fechaEntradEdu;
  private Date fechaEntradaCNEA;


  @ManyToMany
  @JoinTable(
    name = "employee_medal",
    joinColumns = @JoinColumn(name = "medal_id"),
    inverseJoinColumns = @JoinColumn(name = "employee_id")
  )
  private List<Employee> employees;

}

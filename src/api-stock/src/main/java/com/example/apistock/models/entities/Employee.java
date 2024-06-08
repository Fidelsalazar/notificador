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

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employees")
public class Employee {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idEmpleado;

  private String noCI;
  private String nombre;
  private String apellido1;
  private String apellido2;
  private boolean cuadroDisponibleGuardia;
  private int tiempoTrabajo;
  private int tiempoTrabajoEdu;
  private int tiempoTrabajoCNEA;
  private int year2022;
  private int year2023;
  private Date fechaSolicitud;
  private boolean otorgada;
  private String numeroResolucion;

}

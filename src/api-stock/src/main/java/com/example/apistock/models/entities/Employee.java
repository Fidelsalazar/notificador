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

  @Column
  private Long idEmpleado;
  @Column
  private String noCI;
  @Column
  private String nombre;
  @Column
  private String apellido1;
  @Column
  private String apellido2;
  @Column
  private String cuadro;
  @Column
  private String sexo;
  @Column
  private Date fechaEntrada;
  @Column
  private Date fechaEntradEdu;
  @Column
  private Date fechaEntradaCNEA;

  /*@ManyToMany
  @JoinTable(
    name = "employee_medal",
    joinColumns = @JoinColumn(name = "medal_id"),
    inverseJoinColumns = @JoinColumn(name = "employee_id")
  )
  private List<Medal> medals;*/

}

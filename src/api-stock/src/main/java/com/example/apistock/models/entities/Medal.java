package com.example.apistock.models.entities;

import jakarta.persistence.*;
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
public class Medal {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String Name;
  private Integer timeWork;
  private Date fechaSolicitud;

  @ManyToMany
  @JoinTable(
    name = "employee_medal",
    joinColumns = @JoinColumn(name = "medal_id"),
    inverseJoinColumns = @JoinColumn(name = "employee_id")
  )
  private List<Employee> employees;


  @ManyToOne
  private Institucion institucion;
}

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
@Table(name = "orders")
public class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String productCode;
  private Date date;
  private double amount;
  private int quantity;
  private String customer;
  private String status;

  @ManyToOne
  @JoinColumn(name = "employee_id")
  private Employee employee;

  // Getters and setters...
}

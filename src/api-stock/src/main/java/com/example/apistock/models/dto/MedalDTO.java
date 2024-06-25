package com.example.apistock.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedalDTO {

  private Long id;
  private Long medal;
  private Long employee;
  private String status;
  private Date fechaEntrega;

  @Override
  public String toString() {
    return "MedalDTO{" +
      "id=" + id +
      ", medal=" + medal +
      ", employee=" + employee +
      ", status='" + status + '\'' +
      ", fechaEntrega=" + fechaEntrega +
      '}';
  }
}

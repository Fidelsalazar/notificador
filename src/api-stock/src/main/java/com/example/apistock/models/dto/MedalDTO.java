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
  private String name;
  private String status;
  private Date fechaEntrega;
  private Date fechaSolicitud;

  @Override
  public String toString() {
    return "MedalDTO{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", status='" + status + '\'' +
      ", fechaEntrega=" + fechaEntrega +
      ", fechaSolicitud=" + fechaSolicitud +
      '}';
  }
}

package com.example.apistock.models.dto;

import com.example.apistock.models.entities.Medal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {

  private Long id;
  private Long idEmpleado;
  private String noCI;
  private String nombre;
  private String apellido1;
  private String apellido2;
  private String cuadro;
  private String sexo;
  private Date fechaEntrada;
  private Date fechaEntradEdu;
  private Date fechaEntradaCNEA;

  //private List <MedalDTO> medals;

  //public List<Long> getMedalsIds() {
   // return medals.stream().map(MedalDTO::getId).collect(Collectors.toList());
 // }


}

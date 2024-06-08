package com.example.apistock.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsersDTO {

  private String username;
  private String password;

  @Override
  public String toString() {
    return "UsersDTO{" +
      "username='" + username + '\'' +
      ", password='" + password + '\'' +
      '}';
  }
}

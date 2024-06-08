package com.example.apistock.services.auth;

import com.example.apistock.models.dto.UsersDTO;
import com.example.apistock.models.entities.Users;
import com.example.apistock.repositories.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService{

  @Autowired
  private final AuthRepository authRepository;

  public AuthServiceImpl(AuthRepository authRepository) {
    this.authRepository = authRepository;
  }

  @Override
  public boolean registerUser(UsersDTO user){
    if (authRepository.findByUsername(user.getUsername()).isPresent()) {
         return false;
    }

    Users x = Users.builder()
      .username(user.getUsername())
      .password(user.getPassword())
      .build();

    authRepository.save(x);
    return true;
  }

  @Override
  public  boolean loginUser(UsersDTO user){
    return authRepository.findByUsername(user.getUsername()).isPresent()
      || authRepository.findByPassword(user.getPassword()).isPresent();
  }
}

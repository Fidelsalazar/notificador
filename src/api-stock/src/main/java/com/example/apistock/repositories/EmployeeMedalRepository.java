package com.example.apistock.repositories;

import com.example.apistock.models.entities.EmployeeMedal;
import com.example.apistock.models.entities.EmployeeMedalId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeMedalRepository extends JpaRepository< EmployeeMedal, EmployeeMedalId > {
}

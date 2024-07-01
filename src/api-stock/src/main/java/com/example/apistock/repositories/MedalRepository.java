package com.example.apistock.repositories;

import com.example.apistock.models.entities.Medal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedalRepository extends JpaRepository<Medal, Long> {
  List<Medal> findByTimeWork( Long aniosWorked);

  Medal findByName( String name);
}

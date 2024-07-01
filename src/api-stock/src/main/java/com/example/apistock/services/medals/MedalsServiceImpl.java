package com.example.apistock.services.medals;

import com.example.apistock.models.entities.Medal;
import com.example.apistock.repositories.MedalRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class MedalsServiceImpl implements MedalsService {

  private final MedalRepository medalRepository;

  public MedalsServiceImpl(MedalRepository medalRepository) {
    this.medalRepository = medalRepository;
  }

  @Override
  public Medal getbymedal(
    String medalget
  ){
    try {
      log.info(medalRepository.findByName( medalget ).toString());
      return medalRepository.findByName( medalget );
    }catch (Exception e) {
      log.error(String.valueOf(e));
    }
    return null;

  }
}

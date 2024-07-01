package com.example.apistock.services.scheduled;

import com.example.apistock.models.entities.Employee;
import com.example.apistock.models.entities.EmployeeMedal;
import com.example.apistock.models.entities.EmployeeMedalId;
import com.example.apistock.models.entities.Medal;
import com.example.apistock.repositories.EmployeeMedalRepository;
import com.example.apistock.repositories.EmployeeRepository;
import com.example.apistock.repositories.MedalRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Date;

@Slf4j
@Component
public class ScheduledTask implements ScheduledTaskInterface{

  private final EmployeeRepository employeeRepository;
  private final MedalRepository medalRepository;
  private final EmployeeMedalRepository employeeMedalRepository;

  public ScheduledTask(EmployeeRepository employeeRepository, MedalRepository medalRepository, EmployeeMedalRepository employeeMedalRepository) {
    this.employeeRepository = employeeRepository;
    this.medalRepository = medalRepository;
    this.employeeMedalRepository = employeeMedalRepository;
  }

  //@Scheduled(fixedRate = 1000)// Ejecutar cada 1000 milisegundos (1 segundo)
  @Scheduled( cron = " 0 0 0 * * ? " ) //Ejecutar diariamente a medianoche
  public  void checkMedall() {
    log.info("Ejecutando checkMedall()");

    List < Employee > employeeList = employeeRepository.findAll();
    LocalDate actualDate = LocalDate.now();
    Date fechaSolicitud = java.sql.Date.valueOf(actualDate);

    log.info("Iniciando la revisión de empleados para la asignación de medallas.");

    for ( Employee employee : employeeList ) {

      LocalDate fechaEntradaEdu = employee.getFechaEntradEdu().toInstant()
        .atZone(ZoneId.systemDefault())
        .toLocalDate();

      long aniosWorked = ChronoUnit.YEARS.between(fechaEntradaEdu, actualDate);

      log.info("Empleado ID: " + employee.getId() + " - Años trabajados: " + aniosWorked);

      // Buscar todas las medallas que coincidan con los años trabajados del empleado
      List < Medal > matchingMedals = medalRepository.findByTimeWork( aniosWorked );

      for ( Medal medal : matchingMedals ) {
        log.info("Encontrada medalla: " + medal.getName() + " para " + aniosWorked + " años de servicio.");

        // Crear y guardar la asociación en la tabla employee_medal
        EmployeeMedal employeeMedal = new EmployeeMedal();

        // Crear una nueva instancia de EmployeeMedalId
        EmployeeMedalId id = new EmployeeMedalId();
        id.setEmployeeId(employee.getId());
        id.setMedalId(medal.getId());

        // Asignar la instancia de EmployeeMedalId a la entidad EmployeeMedal
        employeeMedal.setId(id);
        employeeMedal.setEmployee(employee);
        employeeMedal.setMedal(medal);
        employeeMedal.setStatus("PROPUESTA");
        employeeMedal.setFechaEntrega(null);
        employeeMedal.setFechaSolicitud(fechaSolicitud);

        employeeMedalRepository.save(employeeMedal);
        log.info("Medalla " + medal.getName() + " asignada al empleado ID: " + employee.getId());
      }
    }

    log.info( "Revisión de empleados completada." );
  }
}

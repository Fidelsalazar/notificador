import {
  Component,
  Inject,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  Output,
  EventEmitter,
  model
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CustomerService } from '../../services/customer/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TreeSelectModule } from 'primeng/treeselect';
import { MedalsService } from '../../services/medal/medals.service'
import { ScrollTopModule } from 'primeng/scrolltop';
import { CalendarModule } from 'primeng/calendar';
import { from } from 'rxjs';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    ScrollPanelModule,
    TreeSelectModule,
    ScrollTopModule,
    CalendarModule,
    CheckboxModule,
  ],
  providers: [CustomerService, MedalsService],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css',
})
export class EditDialogComponent implements OnInit {
  nodes!: any[];
  value: string | undefined;

  maleChecked = false;
  femaleChecked = false;

  use: string;
  template: string;
  center: any;
  selectedNodes: any;

  employeeForm: FormGroup = new FormGroup({});

  @Output() modificationSuccess = new EventEmitter<void>();

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @ViewChild('newEmployee', { static: true })
  newEmployeeContenidoTemplate!: TemplateRef<any>;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.use = data.use;
    this.template = data.search;
    this.center = data.data;

    this.customerService.getAllCustomers().subscribe({
      next: (response: any[]) => {
        console.log('Lista de centros', response);
        this.nodes = response.map((center) => ({
          label: center.center,
          data: {
            sitio: center.sitio,
            id: center.id,
          },
        }));
      },
    });
  }

  ngOnInit(): void {
    console.log('Edit component', this.use, this.template, this.center);
    if (this.template === 'newEmployee') {
      this.container.createEmbeddedView(this.newEmployeeContenidoTemplate);
      this.initFormEmployee();
    }

    this.customerService.getModificacionExitosaSubject().subscribe(() => {
      // Aquí puedes realizar las actualizaciones necesarias en el componente
      console.log(
        'La modificación se ha completado correctamente, actualizando el componente...'
      );

      this.modificationSuccess.emit();
    });
  }

  onGenderChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const gender = checkbox.value;

    this.maleChecked = gender === 'M';
    this.femaleChecked = gender === 'F';
  }

  initFormEmployee() {
    this.employeeForm = this.fb.group({
      fechaEntrada: [''],
      fechaEntradEdu: [''],
      fechaEntradaCNEA: [''],
      idEmpleado: [''],
      noCI: [''],
      nombre: [''],
      apellido1: [''],
      apellido2: [''],
      cuadro: 'false',
      sexo: '',
    });
  }

  send() {
    console.log('Servicio modificar empleado', this.employeeForm.value);
    console.log('Empleado enviado', this.center);
    if (this.employeeForm.valid) {
      const datosFormulario = { ...this.employeeForm.value };
      console.log(datosFormulario);
       datosFormulario.sexo = this.maleChecked
         ? 'M'
         : this.femaleChecked
         ? 'F'
         : '';

       console.log('Datos que se enviarán:', datosFormulario);
      this.customerService.create(datosFormulario).subscribe({
        next: (response) => {
          console.log('Datos enviados correctamente:', response.status);

          this.customerService.setModificacionExitosa(true);
          this.modificationSuccess.emit();
          this.close();
        },
        error: (error) => {
          console.error('El formulario no es válido:', error);
        },
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}

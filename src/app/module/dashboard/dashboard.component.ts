import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AuthService } from '../../services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { Customer } from '../../core/interface/customer.interface';
import { CustomerService } from '../../services/customer/customer.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    CommonModule,
    NavbarComponent,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    TagModule,
    RatingModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [AuthService, MessageService, CustomerService],
})
export class DashboardComponent {
  products!: Customer[];
  expandedRows = {};

  constructor(
    public authService: AuthService,
    private customerService: CustomerService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.customerService
      .getCustomersLarge()
      .then((data) => (this.products = data));
  }

  expandAll(): void {
    this.expandedRows = this.products.reduce(
      (acc: { [key: string]: boolean }, p) => {
        acc[p.id] = true;
        return acc;
      },
      {} as { [key: string]: boolean }
    );
  }

  collapseAll() {
    this.expandedRows = {};
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'DELIVERED':
        return 'success';
      case 'CANCELLED':
        return 'danger';
      default:
        return undefined;
    }
  }

  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Expanded',
      detail: event.data.name,
      life: 3000,
    });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Product Collapsed',
      detail: event.data.name,
      life: 3000,
    });
  }
}

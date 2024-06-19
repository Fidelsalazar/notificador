import { Component } from '@angular/core';
import { MedalsService } from '../../services/medal/medals.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-jose-tey',
    standalone: true,
    providers: [MedalsService],
    templateUrl: './medals.component.html',
    styleUrl: './medals.component.css',
    imports: [
        TableModule,
        CommonModule,
        ButtonModule,
        HttpClientModule,
        NavbarComponent
    ]
})
export class MedalsComponent {
  customers!: any[];

  first = 0;

  rows = 10;

  constructor(private medalsService: MedalsService) {}

  ngOnInit() {
    this.medalsService
      .getCustomersLarge()
      .then((customers) => (this.customers = customers));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}

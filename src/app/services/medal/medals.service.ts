import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedalsService {
  customers: any[] = [
    // ... lista de clientes ...
  ];

  constructor() {}

  filterGlobal(value: string, matchMode: string): void {
    if (!value || !matchMode) {
      return;
    }
    this.customers = this.customers.filter((customer: { name: any }) => {
      // Supongamos que queremos filtrar por el nombre del cliente
      const customerValue = customer.name;

      switch (matchMode) {
        case 'contains':
          return customerValue.includes(value);
        case 'startsWith':
          return customerValue.startsWith(value);
        case 'endsWith':
          return customerValue.endsWith(value);
        default:
          // Si el modo de coincidencia no es reconocido, no se filtra
          return this.customers;
      }
    });
  }

  getCustomersLarge(): Promise<any> {
    return new Promise((resolve) => {
      resolve([

      ]);
    });
  }
}

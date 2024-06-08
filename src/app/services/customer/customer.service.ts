import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

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
        {
          id: '1001',
          code: 'b230fh0g4',
          name: 'Elegant Watch',
          description: 'Elegant Watch Description',
          image: 'elegant-watch.jpg',
          price: 120,
          category: 'Accessories',
          quantity: 15,
          inventoryStatus: 'INSTOCK',
          rating: 4,
          orders: [
            {
              id: '1001-0',
              productCode: 'b230fh0g4',
              date: '2020-10-14',
              amount: 120,
              quantity: 2,
              customer: 'Maria Anders',
              status: 'DELIVERED',
            },
            // ... más órdenes ...
          ],
        },
        {
          id: '1002',
          code: 'c330gh0h5',
          name: 'Classic Watch',
          description: 'Classic Watch Description',
          image: 'classic-watch.jpg',
          price: 75,
          category: 'Accessories',
          quantity: 30,
          inventoryStatus: 'LOWSTOCK',
          rating: 3,
          orders: [
            {
              id: '1002-0',
              productCode: 'c330gh0h5',
              date: '2020-11-15',
              amount: 75,
              quantity: 1,
              customer: 'Steve Wozniak',
              status: 'RETURNED',
            },
            // ... más órdenes ...
          ],
        },
      ]);
    });
  }
}

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
          id: '007',
          name: 'BIRDOLOY CABALLERO KENIA',
          image: 'elegant-watch.jpg',
          sex: 'F',
          tt: 21,
          tedu: 21,
          tcnea: 21,
          orders: [
            {
              date: '2020-09-24',
              resolution: '',
              amount: '',
              quantity: 'Sindicato Nacional de Trabajadores de la Educacion',
              customer: 'Distincion Rafael Maria de Mendive ',
              status: 'PROPUESTA',
            },
          ],
        },
        {
          id: '011',
          name: 'MELEK CAMPOS SOFIA',
          image: 'elegant-watch.jpg',
          sex: 'F',
          tt: 27,
          tedu: 27,
          tcnea: 27,
          orders: [
            {
              date: '',
              resolution: '',
              amount: '2014',
              quantity: '',
              customer: 'Medalla Jesús Menendez',
              status: 'ENTREGADA',
            },
          ],
        },
        {
          id: '028',
          name: 'MARIO HECHAVARRIA SANCHEZ',
          image: 'elegant-watch.jpg',
          sex: 'M',
          tt: 38,
          tedu: 13,
          tcnea: 13,
          orders: [
            {
              date: '6-19-2024',
              resolution: '',
              amount: '',
              quantity: '',
              customer: 'Medalla Lazaro Peña de 3er Grado',
              status: 'SOLICITADA',
            },
          ],
        },
        {
          id: '003',
          name: 'MONICA ROSARIO BERENGUER UNGARO',
          image: 'elegant-watch.jpg',
          sex: 'F',
          tt: 28,
          tedu: 28,
          tcnea: 28,
          orders: [
            {
              date: '',
              resolution: '',
              amount: '',
              quantity: '',
              customer: '',
              status: '',
            },
          ],
        },
        // ... (y así sucesivamente para cada entrada)
      ]);
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[];

  constructor() {
    this.products = [
      {
        Pid: 101,
        Pname: 'Laptop',
        Price: 55000,
        Company: 'Dell',
        M_date: '10/01/2024',
        Exp_date: '10/01/2027',
        Product_status: "1"
      },
      {
        Pid: 102,
        Pname: 'Mobile',
        Price: 25000,
        Company: 'Samsung',
        M_date: '12/05/2024',
        Exp_date: '12/05/2026',
        Product_status: "0"
      },
      {
        Pid: 103,
        Pname: 'Headphones',
        Price: 3000,
        Company: 'Boat',
        M_date: '08/11/2023',
        Exp_date: '08/11/2025',
        Product_status: "-1"
      },
    ];
  }
}

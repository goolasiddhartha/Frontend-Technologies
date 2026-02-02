  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsService {
    products:any;
    getProducts()
    {
      return(
        this.products=[
          {
            "pid":1001,
            "pname":"Mobile_1",
            "price":23000,
            "company":"Samsung",
            "M_date":"7/1/2025",
            "Exp_date":"7/1/2027",
          },
          {
            "pid":1002,
            "pname":"Mobile_2",
            "price":25000,
            "company":"Samsung",
            "M_date":"7/21/2025",
            "Exp_date":"7/21/2027",
          },
          {
            "pid":1003,
            "pname":"Mobile_3",
            "price":29000,
            "company":"Samsung",
            "M_date":"7/22/2025",
            "Exp_date":"7/23/2027",
          }
        ]
      )
    }

    constructor() { }
  }

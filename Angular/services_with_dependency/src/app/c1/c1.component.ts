import { Component } from '@angular/core';

import {ProductsService} from '../products.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  products:any;
  constructor(service:ProductsService)
  {
    this.products=service.getProducts();
  }

}

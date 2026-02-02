import { Component } from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  products:any;
  constructor(service:ProductsService)
  {
    this.products=service.getProducts();
  }

}

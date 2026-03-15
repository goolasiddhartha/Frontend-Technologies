import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two_way_databinding';
  Pid:number=101;
  Pname:string="Siddhartha";
  Price:number=35000;
  Company:string="TCS"

}

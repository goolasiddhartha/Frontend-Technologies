import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one_way_databinding';
   username: string = "Siddhartha_12345";

  image_1: string = "https://i.insider.com/644392e43d49030019df2";

  number_1: number = 175;

  ABC: boolean = true;

  color_1: string = "green";

  Test_Case1() {
    console.log("Welcome to Events in Angular_Framework");
  }
}

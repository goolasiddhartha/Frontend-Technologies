import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  players:any;
  SearchName:string="";
  constructor()
  {
    this.players=[
      {
        "Name":"Virat Kohli",
        "Team":"India",
        "DOB":"7/21/1988",
        "Fours":467,
        "Sixes":356,
        "Others":7000
      },
      {
        "Name":"Rohit Sharmas",
        "Team":"India",
        "DOB":"7/21/1987",
        "Fours":463,
        "Sixes":653,
        "Others":5000
      },
      {
        "Name":"Rick Pointng",
        "Team":"AUS",
        "DOB":"3/17/1979",
        "Fours":421,
        "Sixes":310,
        "Others":6000
      }
    ]
  }

}

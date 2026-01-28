import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { AgePipe } from './age.pipe';
import { ScorePipe } from './score.pipe';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AgePipe,
    ScorePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VillageComponent } from './village/village.component';
import { WeatherComponent } from './weather/weather.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';


@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    WeatherComponent,
    TeddyBearComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

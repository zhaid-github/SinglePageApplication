import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { ForecastComponent } from './forecast/forecast.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { MomentPipe } from './moment.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent,
    WeatherComponent,
    InicioComponent,
    ForecastComponent,
    FahrenheitPipe,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo5eHkeqhurDSk1LwGLQk0D2YUI8pbKhM'// Please use your own key here !!
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

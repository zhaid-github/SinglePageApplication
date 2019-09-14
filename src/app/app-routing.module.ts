import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ForecastComponent } from './forecast/forecast.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent, // por defecto
    children: [
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'weather',
        component: WeatherComponent,
        children: []
      },
      {
        path: 'forecast',
        component: ForecastComponent,
        children: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


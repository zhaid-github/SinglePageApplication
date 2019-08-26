import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent, // por defecto
    children: [
      {
        path: 'map',
        component: WeatherComponent
      },
      {
        path: 'weather',
        component: WeatherComponent,
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


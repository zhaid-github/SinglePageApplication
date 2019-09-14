import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametrosService } from '../parametros.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  subscription: any;

  constructor(private http: HttpClient, public ParametrosService: ParametrosService) { }


  ngOnInit() {
    this.subscription = this.ParametrosService.getParametrosChangeEmitter()
      .subscribe(bandera => this.callWeatherService());

    this.callWeatherService();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  callWeatherService() {

    let url = 'http://api.openweathermap.org/data/2.5/forecast?'
      + 'lat=' + this.ParametrosService.lat
      + '&lon=' + this.ParametrosService.lng
      + '&units=metric'
      + '&lang=en'
      + '&appid=1e67964ef3b67d111fa749c2bb22d901'; // your api key here

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
       this.ParametrosService.city = data.city.name;
      this.ParametrosService.temperature = data.list[0].main.temp.toFixed(1);
    });


    //  this.http.get(url).toPromise().then((data: any) => {
    //   console.log(data);
    // });
  }

}

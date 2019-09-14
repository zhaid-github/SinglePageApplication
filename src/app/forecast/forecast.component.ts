import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametrosService } from '../parametros.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  subscription: any;
  weather_list: any;

  constructor(private http: HttpClient, public ParametrosService: ParametrosService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.subscription = this.ParametrosService.getParametrosChangeEmitter()
      .subscribe(bandera => this.callWeatherForecastService());

    this.callWeatherForecastService();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  callWeatherForecastService() {

    let url = 'http://api.openweathermap.org/data/2.5/forecast?'
      + 'lat=' + this.ParametrosService.lat
      + '&lon=' + this.ParametrosService.lng
      + '&units=metric'
      + '&lang=en'
      + '&appid=1e67964ef3b67d111fa749c2bb22d901'; // your api key here

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      this.weather_list = [];
      for (var i = 0; i < data.list.length; i += 8) {
        this.weather_list.push(data.list[i]);
        // if (i == 0) {
        //   i = 4
        // }
      }

      console.log(this.weather_list);
      this.ParametrosService.city = data.city.name;
      this.ParametrosService.country = data.city.country;
      this.ParametrosService.temperature = data.list[0].main.temp.toFixed(1);
      this.ParametrosService.weather_list = this.weather_list;

    });



  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


}

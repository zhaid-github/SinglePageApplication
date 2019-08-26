import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ParametrosService } from '../parametros.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  bandera: boolean = true;
  constructor(public ParametrosService: ParametrosService) { }

  ngOnInit() {
  }


  mapClicked($event: MouseEvent) {
    this.ParametrosService.lat = $event.coords.lat;
    this.ParametrosService.lng = $event.coords.lng;
    this.bandera = !this.bandera;
    this.ParametrosService.emitParametrosChangeEvent(this.bandera);
  }


}

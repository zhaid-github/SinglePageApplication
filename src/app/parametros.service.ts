import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ParametrosService {

  parametrosChange: EventEmitter<any> = new EventEmitter();

  public lat: number = 21.9140788;
  public lng: number = -102.3175689;
  public zoom: number = 12;
  public city: string = "Aguascalientes";
  public temperature: number = 0;


  constructor() { }

  emitParametrosChangeEvent(bandera) {
    this.parametrosChange.emit(bandera);
  }

  getParametrosChangeEmitter() {
    return this.parametrosChange;
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '1d4d15afa2601cadf276d7f6ebffc669';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo (ciudad: string, codigo: string) {
    const url = `${ urlBase }?q=${ ciudad },${ codigo }&appid=${appId}&units=metric`;

    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {
  meteoData;

  constructor(private http: HttpClient) {

  }



  getMeteo(){
    this.http.get('api.openweathermap.org/data/2.5/weather?q={bordeaux}&appid={0b9b5f74ed99e7f1b4c20fe791d38805}')
      .subscribe( (value) => {
        this.meteoData = value;
      });
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherData } from '../models/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData(city: string): Observable<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-RapidAPI-Key', '3b589dab08msh1db22908c3835dep1a637bjsn89e1157a7d5a')
      .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
    return this.http.get('https://open-weather13.p.rapidapi.com/city/'+ city, { headers })
  }
}

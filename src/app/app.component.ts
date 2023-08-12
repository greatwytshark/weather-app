import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  report: any;
  cityName: string ='Landon';
  date!: Date;

  constructor(private weatherService: WeatherService){
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnInit(): void {
    this.getData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getData(this.cityName);
    this.cityName = ''
  }

  getData(city: string){
    this.weatherService.getData(city).subscribe(data => {
      this.report = data;
      console.log(this.report);

    });
  }
  
}

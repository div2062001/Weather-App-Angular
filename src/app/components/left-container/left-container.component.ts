import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent {
[x: string]: any;

  constructor(public weatherService : WeatherService){}

  //variables for font awesome icons
  faMagnifyingGlass:any = faMagnifyingGlass;
  faLocation:any = faLocation;

  faCloud:any = faCloud;
  faCloudRain:any = faCloudRain;

  public onSearch(location:string){
    this.weatherService.cityName = location;
    this.weatherService.getData();
  }

}

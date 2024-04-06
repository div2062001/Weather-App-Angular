import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {

  constructor(public weatherService:WeatherService){}

  faThumbsUp:any = faThumbsUp;
  faThumbsDown:any = faThumbsDown;
  faFaceSmile : any = faFaceSmile;
  faFaceFrown:any = faFaceFrown;

// functions to control tab values
onTodayClick(){
  this.weatherService.today = true;
  this.weatherService.week = false;
}

onWeekClick(){
  this.weatherService.week = true;
  this.weatherService.today = false;
}

//functions to control metric values

onCelsiusClick(){
  this.weatherService.celsius = true;
  this.weatherService.fahrenheit = false;
}
onFahrenheitClick(){
  this.weatherService.fahrenheit = true;
  this.weatherService.celsius = false;
}


}

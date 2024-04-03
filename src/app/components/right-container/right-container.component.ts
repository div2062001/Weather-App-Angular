import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {

  faThumbsUp:any = faThumbsUp;
  faThumbsDown:any = faThumbsDown;
  faFaceSmile : any = faFaceSmile;
  faFaceFrown:any = faFaceFrown;

  today:boolean=false;
  week:boolean = true;

  celsius:boolean = true;
  fahrenheit:boolean=false;


// functions to control tab values
onTodayClick(){
  this.today = true;
  this.week = false;
}

onWeekClick(){
  this.week = true;
  this.today = false;
}

//functions to control metric values

onCelsiusClick(){
  this.celsius = true;
  this.fahrenheit = false;
}
onFahrenheitClick(){
  this.fahrenheit = true;
  this.celsius = false;
}


}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationDetails } from '../Models/LocationDetails';
import { WeatherDetails } from '../Models/WeatherDeatils';
import { TemperatureData } from '../Models/TemperatureData';
import { TodayData } from '../Models/TodayData';
import { WeekData } from '../Models/WeekData';
import { TodaysHighlight } from '../Models/TodaysHighlight';
import { Observable } from 'rxjs';
import { EnvironmentVariables } from '../Environment/EnvironmentVariables';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //variables which will be filled bt API Endpoints
  locationDetails?: LocationDetails;
  weatherDetails?:WeatherDetails;

  //Variables that have the extracted data from the API Endpoint Variables
  tempertureData?:TemperatureData;   //left-container

  todayData?:TodayData;              //right-container
  weekData?: WeekData;                //right-cotainer
  todaysHighlight?: TodaysHighlight;

  //variables for API Calls
  cityName:string = 'Pune';
  language:string = 'en-US';
  date:string = '20200622';
  units:string = 'm';


  constructor(private httpClient: HttpClient) { 
    this.getData();
    
  }

  //method to create useful data chunks for UI using the data received from the API
  prepareData():void{}

// method to get the location details from the API using the variable cityName as the Input.
  getLocationDetails(cityName:string, language:string):Observable<LocationDetails>{
    return this.httpClient.get<LocationDetails>(EnvironmentVariables.weatherApiLocationBaseURL,{
      headers: new HttpHeaders()
      .set(EnvironmentVariables.xRapidApiKeyName, EnvironmentVariables.xRapidApiKeyValue)
      .set(EnvironmentVariables.xRapidApiHostName,EnvironmentVariables.xRapidApiHostValue),
      params : new HttpParams()
      .set('query',cityName)
      .set('language', language)
    });
  }

  getWeatherReport(date:string, latitude:number, longitude:number, language:string, units:string):Observable<WeatherDetails>{
    return this.httpClient.get<WeatherDetails>(EnvironmentVariables.weatherApiForecastBaseURL,{
      headers : new HttpHeaders()
      .set(EnvironmentVariables.xRapidApiKeyName, EnvironmentVariables.xRapidApiKeyValue)
      .set(EnvironmentVariables.xRapidApiHostName,EnvironmentVariables.xRapidApiHostValue),
      params : new HttpParams()
      .set('date', date)
      .set('latitude',latitude)
      .set('longitude', longitude)
      .set('language',language)
      .set('units',units)
    });
  }

  getData(){
    var latitude = 0;
    var longitude = 0;
    this.getLocationDetails(this.cityName, this.language).subscribe({
      next: (response)=>{
        this.locationDetails = response;
        latitude = this.locationDetails?.location.latitude[0];
        longitude = this.locationDetails?.location.longitude[0];

        //Once we get the values for latitude and longitude we can for the getWeatherReport method.
        this.getWeatherReport(this.date,latitude,longitude,this.language,this.units).subscribe({
          next: (response) =>{
            this.weatherDetails = response;

            this.prepareData();
           }
        });
      },
    });

    

  }
  
}

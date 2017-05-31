import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CurrentLoc } from "../interfaces/current-loc";
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherService {
  data:any=null;

  constructor(public http: Http) {
    console.log('Hello WeatherService Provider');
  }
  //Adding Interface to the Load parameter to provide the location details.
  load(currentLoc:CurrentLoc){
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve=>{
      //Calling darksky with adding the data returned from Interface CurrentLoc
      this.http.get('/api/'+currentLoc.lat + ',' + currentLoc.lon).map(res=>res.json()).subscribe(data=>{
        this.data=data;
        resolve(this.data);
      });
    });
  }
  //Also passing the currentLoc to below function too to load.
  getWeather(currentLoc: CurrentLoc){
    this.data=null;
    return this.load(currentLoc).then(data=>{
      return data;
    });
  }
}

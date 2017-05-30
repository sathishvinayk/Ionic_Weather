import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { WeatherService }from "../../providers/weather-service";
import { Geolocation }from "@ionic-native/geolocation";
import { CurrentLoc }from "../../interfaces/current-loc";

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class Weather {
  //Added three variables to hold weather data with class definition.
  theWeather: any={};
  currentData: any={};
  daily: any={};
  loader: LoadingController; //Declare the loader module and call it
  refresher: Refresher;
  currentloc: CurrentLoc={lat:0, lon:0}; //varaible that implements interface
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public weatherService: WeatherService,
              public loadingCtrl: LoadingController,
              public geolocation: Geolocation
              ) {
    //Call the ionViewDidLoad inside the constructor
      this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    setTimeout(()=>{
      this.InitializeWeathering();
      this.GetGeo();
    },500)
  }
  //Create a method and then call it via ionViewDidLoad()
  InitializeWeathering(){
    let loader=this.loadingCtrl.create({
      content: "Loading Weather Data...",
      duration:3000
    })
    this.weatherService.getWeather().then(theResult=>{
      this.theWeather=theResult;
      this.currentData=this.theWeather.currently;
      this.daily=this.theWeather.daily;
    })
    loader.present();
  }
  // Adding Geolocation method and calling it in constructor
  GetGeo(){
    //getCurrentPosition will store value in the interface defined above
    this.geolocation.getCurrentPosition().then(pos=>{
      console.log('lat: '+pos.coords.latitude+', lon: '+pos.coords.longitude);
      this.currentloc.lat=pos.coords.latitude;
      this.currentloc.lon=pos.coords.longitude;
      this.currentloc.timestamp=pos.timestamp;
    });
  }
  // Added refresher method here
  doRefresh(refresher){
    setTimeout(()=>{
      refresher.complete();
    },2000);
  }
}

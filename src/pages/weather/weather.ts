import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherService }from "../../providers/weather-service";
/**
 * Generated class for the Weather page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public weatherService: WeatherService) {
    //Call the ionViewDidLoad inside the constructor
      this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.InitializeWeathering();
    },500)
  }
  //Create a method and then call it via ionViewDidLoad()
  InitializeWeathering(){
    this.weatherService.getWeather().then(theResult=>{
      this.theWeather=theResult;
      this.currentData=this.theWeather.currently;
      this.daily=this.theWeather.daily;
    })
  }
}

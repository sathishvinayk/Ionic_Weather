import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { CurrentLoc }from "../../interfaces/current-loc";
import { WeatherLocation }from "../../interfaces/weather-location";
import { LocationsService }from "../../providers/locations-service";

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class Locations {
  //Calling Interface to store the values as a object and then assigning to variable named locs  with type array,
  locs: Array<WeatherLocation>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public locationsService: LocationsService) {
        this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    this.locationsService.getLocations().then(res=>{
      return this.locs=res;
    })
  }
  deleteLocation(loc){
    this.locationsService.removeLocation(loc);
  }
  addLocation(){
    console.log("add")
  }
}

import { Injectable }from "@angular/core";
import { Weather } from "../pages/weather/weather";
import { WeatherLocation }from "../interfaces/weather-location";

@Injectable()

export class LocationsService{
  locations: Array<WeatherLocation>;

  constructor(){
    this.locations=[
      { title: 'Cape Canaveral, FL', component: Weather, icon: 'pin', loc: {lat:25.3922, lon:-80.6077}},
      { title: 'San Fransisco, CA', component: Weather, icon: 'pin', loc: {lat:37.7749, lon:-122.4194}},
      { title: 'VanCouver, BC', component: Weather, icon: 'pin', loc: {lat:49.2827, lon:-123.1207}},
      { title: 'Madison WI', component: Weather, icon: 'pin', loc: {lat:43.0742365, lon:-89.381011899}}
    ]
  }
  getLocations(){
    return Promise.resolve(this.locations);
  }
  removeLocation(loc: WeatherLocation){
    let index=this.locations.indexOf(loc);
    if(index>-1){
      this.locations.splice(index,1);
    }
  }
  addLocations(loc:WeatherLocation){
    this.locations.push(loc);
  }
}

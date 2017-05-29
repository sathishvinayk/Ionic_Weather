import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Locations } from './locations';

@NgModule({
  declarations: [
    Locations,
  ],
  imports: [
    IonicPageModule.forChild(Locations),
  ],
  exports: [
    Locations
  ]
})
export class LocationsModule {}

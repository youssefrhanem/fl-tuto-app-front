import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    FlightsComponent,
    FlightListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule
  ],
  exports: [
    FlightListComponent
  ]
})
export class FlightsModule { }

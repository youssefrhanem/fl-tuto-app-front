import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SearchFormComponent} from "./shared/components/search-form/search-form.component";
import {FlightListComponent} from "./flights/components/flight-list/flight-list.component";
import {FlightsPageComponent} from "./flights/pages/flights/flights-page/flights-page.component";

const routes: Routes = [
  { path: 'flights', component: FlightsPageComponent},
  { path: 'search', component: SearchFormComponent},
  { path: 'list', component: FlightListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

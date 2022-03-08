import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FlightsPageComponent } from './pages/flights/flights-page/flights-page.component';
import {SharedModule} from "../shared/shared.module";
import {PortalModule} from "../portal/portal.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {I18nDatePipe} from "../utli/pipes/i18n-date.pipe";



@NgModule({
  declarations: [
    FlightsComponent,
    FlightListComponent,
    FlightsPageComponent,
    I18nDatePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule,
    SharedModule,
    PortalModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    FlightListComponent
  ]
})
export class FlightsModule { }

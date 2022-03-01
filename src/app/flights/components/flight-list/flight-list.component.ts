import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Flight} from "../../../shared/models/flight.model";

const ELEMENT_DATA: Flight[] = [
  {
    idFlight: 1,
    companyName: 'Air France',
    flightType: 'Direct flight',
    travelType: 'Round trip',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation: 'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas'
  }
]

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  displayedColumns: string[] = [
    'idFlight',
    'companyName',
    'flightType',
    'travelType',
    'departureDate',
    'departureTime',
    'arrivalDate',
    'arrivalTime',
    'backDate',
    'backTime',
    'departureLocation',
    'arrivalLocation',
    'aircraftType',
    'select'
    ];
  flights = new MatTableDataSource<Flight>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

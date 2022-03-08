import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Flight} from "../../../shared/models/flight.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FlightsService} from "../../services/flights.service";

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
  },
  {
    idFlight: 1,
    companyName: 'Qatar Airways',
    flightType: 'Connection',
    travelType: 'One Way',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Doha',
    arrivalLocation: 'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas'
  },
  {
    idFlight: 1,
    companyName: 'Qatar Airways',
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
  },
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
  },
  {
    idFlight: 1,
    companyName: 'Qatar Airways',
    flightType: 'Connection',
    travelType: 'One Way',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Doha',
    arrivalLocation: 'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas'
  },
  {
    idFlight: 1,
    companyName: 'Qatar Airways',
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) matSort: MatSort | undefined;

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
  // flights = new MatTableDataSource<Flight>(ELEMENT_DATA);
  flights = new MatTableDataSource<Flight>();

  constructor(private readonly flightService: FlightsService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.flights.paginator = this.paginator;
    // @ts-ignore
    this.flights.sort = this.matSort;

    this.flightService.getFlightList().subscribe(flightsList => {
      this.flights.data = flightsList;
    })
  }

}

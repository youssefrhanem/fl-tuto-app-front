import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../../shared/models/flight.model";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  API_URL= `http://localhost:8080/flight-webservices/api/v1.0/flights`;

  constructor(private http: HttpClient) { }

  getFlightList(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.API_URL);
  }


}

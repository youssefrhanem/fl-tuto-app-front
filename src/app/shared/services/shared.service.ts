import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CompanyName} from "../../utli/enums/company-name";
import {TargetVersion} from "@angular/cdk/schematics";
import {TravelType} from "../../utli/enums/travel-type";
import {FlightType} from "../../utli/enums/flight-type";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  companies  : string[] = [];
  trips  : string[] = [];
  flightTypes  : string[] = [];

  private _searchCriteresForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  public get searchCriteresForm(): FormGroup {
    return <FormGroup>this._searchCriteresForm;
  }
  public set searchCriteresForm(value: FormGroup) {
    this._searchCriteresForm = value;
  }

  createSearchCriteresForm(){
    this._searchCriteresForm = this.fb.group({
      company: new FormControl(''),
      flightType: new FormControl(''),
      travelType: new FormControl(''),
      departureLocation: new FormControl(''),
      arrivalLocation: new FormControl(''),
      departureDateMin: new FormControl(''),
      arrivalDateMin: new FormControl(''),
      backDateMin: new FormControl(''),
      departureTimeMin: new FormControl(''),
      arrivalTimeMin: new FormControl(''),
      backTimeMin: new FormControl(''),
      flightDurationMin: new FormControl(''),
      connectionDurationMin: new FormControl(''),
      departureDateMax: new FormControl(''),
      arrivalDateMax: new FormControl(''),
      backDateMax: new FormControl(''),
      departureTimeMax: new FormControl(''),
      arrivalTimeMax: new FormControl(''),
      backTimeMax: new FormControl(''),
      flightDurationMax: new FormControl(''),
      connectionDurationMax: new FormControl(''),
      aircraftType: new FormControl(''),
      fareMin: new FormControl(''),
      fareMax: new FormControl('')
    });
  }

  initDropDownLists() {
    const companyKeys = Object.keys(CompanyName);
    this.companies = companyKeys.slice(companyKeys.length / 2);

    const tripKeys = Object.keys(TravelType);
    this.trips = tripKeys.slice(tripKeys.length / 2);

    const flightTypesKeys = Object.keys(FlightType);
    this.flightTypes = flightTypesKeys.slice(flightTypesKeys.length / 2);
  }

}

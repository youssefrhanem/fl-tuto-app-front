import { Component, OnInit } from '@angular/core';
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  //
  showConnection = true;
  showBack = true;


   searchFlightForm = this.fb.group({});

  timeTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#3f51b5',
      buttonColor: '#fff'
    },
    dial: {
      dialActiveColor: '#b8cdd7',
      dialEditableBackgroundColor: '#000000'
    },
    clockFace: {
      clockFaceBackgroundColor: '#f1f1f1',
      clockHandColor: '#3f51b5',
      clockFaceTimeInactiveColor: '#000000'
    }
  };



  constructor(private fb: FormBuilder,
              private readonly sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.createSearchCriteresForm();
    this.searchFlightForm = this.sharedService.searchCriteresForm;
  }

  restForm(form: FormGroup) {
    form.reset();
  }

  searchFlight() {
    const searchFlightValues =this.searchFlightForm;
    console.log(searchFlightValues);
  }

  selectedTripType(value: any) {
    console.log(value)
    if(value === 'One-way ticket') {
      this.showBack = false;
    } else {
      this.showBack = true;
    }

  }

  selectedCompanyName(value: any) {
    console.log(value)
    if(value === '') {

    } else {

    }
  }

  selectedFlightType(value: any) {
    console.log(value)
    if(value === 'Direct flight') {
      this.showConnection = false;
    } else {
      this.showConnection = true;
    }
  }

}

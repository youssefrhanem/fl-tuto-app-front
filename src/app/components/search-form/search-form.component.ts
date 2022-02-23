import { Component, OnInit } from '@angular/core';
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}

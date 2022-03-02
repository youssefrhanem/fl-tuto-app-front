import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.css']
})
export class FlightsPageComponent implements OnInit {

  isHiddenSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideSearchForm(){
    this.isHiddenSearch = !this.isHiddenSearch;
  }

}

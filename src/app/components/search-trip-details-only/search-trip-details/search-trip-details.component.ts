import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-trip-details',
  templateUrl: './search-trip-details.component.html',
  styleUrls: ['./search-trip-details.component.css']
})
export class SearchTripDetailsComponent implements OnInit {
  checked: boolean = false;

  isDisplayHotelsFlights: boolean = true;
  isDisplayHotels: boolean = false;
  isDisplayFlights: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplayHotelsFlights(){
    this.isDisplayHotelsFlights = !this.isDisplayHotelsFlights;
    this.isDisplayHotels = false;
    this.isDisplayFlights = false;
  }

  toggleDisplayHotels(){
    this.isDisplayHotels = !this.isDisplayHotels;
    this.isDisplayHotelsFlights = false;
    this.isDisplayFlights = false;
  }

  toggleDisplayFlights(){
    this.isDisplayFlights = !this.isDisplayFlights;
    this.isDisplayHotelsFlights = false;
    this.isDisplayHotels = false;
  }



}

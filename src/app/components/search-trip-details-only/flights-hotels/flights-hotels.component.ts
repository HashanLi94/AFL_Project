import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


interface Package {
  name: string;
}

interface PreferredCabinClass {
  cabinClassName: string;
}

interface PreferredAirline {
  preferredAirlineName: string;
}

@Component({
  selector: 'app-flights-hotels',
  templateUrl: './flights-hotels.component.html',
  styleUrls: ['./flights-hotels.component.css']
})
export class FlightsHotelsComponent  {

  val1: string;

  travelDateOne: Date;
  travelDateTwo: Date;

  checkInDate: Date;
  checkOutDate: Date;

  packages: Package[];
  selectedPackage: Package;

  Airline: PreferredAirline[];
  selectedAirline: PreferredAirline;

  cabinClass: PreferredCabinClass[];
  selectedCabinClass: PreferredCabinClass;

  selectedCheckBox: string[] = [];

  isSelectedReturn: boolean = false;
  isSelectedOneWay: boolean = false;
  isSelectedMultiCity: boolean = false;

  form  = new FormGroup({
    from : new FormControl(),
    to: new FormControl(),
    travelDatesOne: new FormControl(),
    travelDatesTwo: new FormControl(),
    occupants: new FormControl(),
    preferredCabinClass : new FormControl(),
    selectedDirectFlights: new FormControl(),
    selectedRefundableFlights: new FormControl(),
    checkInDate: new FormControl(),
    checkOutDate: new FormControl(),

  });

  constructor() {
    this.packages = [
      {name: 'package_1'},
      {name: 'package_2'},
      {name: 'package_3'},

    ];

    this.cabinClass = [
      {cabinClassName : 'Economy'},
      {cabinClassName: 'Bussiness'},
      {cabinClassName : 'Bussiness'},

    ];

    this.Airline = [
      {preferredAirlineName: 'AirBus01'},
      {preferredAirlineName: 'AirBus02'},
      {preferredAirlineName: 'AirBus02'},
    ];
  }


  onSubmit(formValue){
    console.log(this.form.get('tripType'));
    console.log(formValue);

    if (formValue.valid){
      this.form.reset();
    }
  }

  onClear(){
    this.form.setValue({
      from: '',
      to: '',
      travelDatesOne: '',
      travelDatesTwo: '',
      occupants: '',
      preferredCabinClass: '',
      selectedDirectFlights: '',
      selectedRefundableFlights: '',
      checkInDate: '',
      checkOutDate: '',

    });

    this.form.reset(); // reset the form
  }
}





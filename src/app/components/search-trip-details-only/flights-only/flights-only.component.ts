import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {from} from 'rxjs';


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
  selector: 'app-flights-only',
  templateUrl: './flights-only.component.html',
  styleUrls: ['./flights-only.component.css']
})

export class FlightsOnlyComponent implements OnInit {

  val1: string;
  dateOne: Date;
  dateTwo: Date;

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
    tripType: new FormControl(),
    travelDatesOne: new FormControl(),
    travelDatesTwo: new FormControl(),
    travelers: new FormControl(),
    preferredCabinClass : new FormControl(),
    preferredAirline: new FormControl(),
    selectedDirectFlights: new FormControl(),
    selectedRefundableFlights: new FormControl(),
    Origin: new FormControl(),
    destination: new FormControl(),
    departDate: new FormControl()
  });

  ngOnInit(): void {
  }

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
         tripType: '',
         travelDatesOne: '',
         travelDatesTwo: '',
         travelers: '',
         preferredCabinClass: '',
         preferredAirline: '',
         selectedDirectFlights: '',
         selectedRefundableFlights: '',
         Origin: '',
         destination: '',
         departDate: ''

       });

       this.form.reset(); // reset the form
  }

  isDisplayMultiCity(){
    this.isSelectedMultiCity = !this.isSelectedMultiCity;
    this.isSelectedOneWay = this.isSelectedOneWay;
    this.isSelectedReturn = this.isSelectedReturn;
  }

  isDisplayReturn(){
    this.isSelectedMultiCity = this.isSelectedMultiCity;
    // this.isSelectedOneWay = this.isSelectedOneWay;
    // this.isSelectedReturn = this.isSelectedReturn;
  }

  isDisplayOneWay(){
    this.isSelectedMultiCity = this.isSelectedMultiCity;
    // this.isSelectedOneWay = this.isSelectedOneWay;
    // this.isSelectedReturn = this.isSelectedReturn;
  }



}

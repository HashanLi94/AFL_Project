import { Component, OnInit } from '@angular/core';
import {PassengerDetails} from '../PassengerDetails';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-passenger-selection',
  templateUrl: './passenger-selection.component.html',
  styleUrls: ['./passenger-selection.component.css']
})
export class PassengerSelectionComponent implements OnInit {
     pageName: any = 'Event Selection';
  constructor() {}

  passengerDetails: PassengerDetails  = new PassengerDetails();

  passengerDetailsForm = new FormGroup({
    adult: new FormControl('', [Validators.required]),
    child: new FormControl('', [Validators.required]),
    con: new FormControl(''),
    dateOfEvent: new FormControl('', [Validators.required])
  }, {validators : this.myValidator});

  myValidator(group: FormGroup) {
    let sum = 0;
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      sum += group.get([i]).value;
    }
    return sum > 9 ? { notValid: true} : null;
  }

  ngOnInit(): void {
  }

  onSubmit(formValue) {

    localStorage.setItem('passengerData', JSON.stringify(formValue));
    const passengerDetails = JSON.parse(localStorage.getItem('passengerData'));
    console.log(passengerDetails);
    console.log(formValue.value);

  }
}

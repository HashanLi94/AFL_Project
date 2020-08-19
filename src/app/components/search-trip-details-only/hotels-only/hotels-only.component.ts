import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface Occupants{
  occupantsItems: string;
}

@Component({
  selector: 'app-hotels-only',
  templateUrl: './hotels-only.component.html',
  styleUrls: ['./hotels-only.component.css']
})
export class HotelsOnlyComponent  {
  ocItem: Occupants;
  ocItemsSet: Occupants[];

  constructor() {
    this.ocItemsSet = [
      {occupantsItems: 'Occupant Item 01'},
      {occupantsItems: 'Occupant Item 02'},
      {occupantsItems: 'Occupant Item 03'}
    ];
  }

form = new FormGroup({
    city: new FormControl(),
    checkInDate: new FormControl(),
    checkOutDate: new FormControl(),
    occupantsHotelsOnly: new FormControl(),
  });


  onSubmit(formValue) {

  }


}

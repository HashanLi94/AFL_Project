import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-extras-selection',
  templateUrl: './extras-selection.component.html',
  styleUrls: ['./extras-selection.component.css']
})
export class ExtrasSelectionComponent implements OnInit {
    tsAddOnImgUrlOne = 'assets/img/TS-addon3.jpg';
    tsAddOnImgUrlTwo = '';
    tsAddOnImgUrlThree = '';
    packageList: any = ['Package Item 1', 'Package Item 2', 'Package Item 3'];

  constructor() { }

  get f(){
    return this.form.controls;
  }

  form = new FormGroup({
    package: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
  }
  changeWebsite(e) {
    console.log(e.target.value);
  }

  getValueChangeWebsite(){
    return JSON.stringify(this.form.value);
  }

  handleClick($event){

  }

}

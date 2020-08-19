import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  get username(){
    return this.form.get('userName');
  }

  get password(){
    return this.form.get('password');
  }

  // create an object from imported FormGroup class
  form = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl( '', [Validators.required, Validators.minLength(3)])
    },
    Validators.required);

  ngOnInit(): void {
  }

  onSubmit(formValue){
    console.log(formValue.value);

    localStorage.setItem('userLoginDetails', JSON.stringify(formValue));
    const getLocalStorage = JSON.parse(localStorage.getItem('userLoginDetails'));
    console.log(getLocalStorage);
  }
}

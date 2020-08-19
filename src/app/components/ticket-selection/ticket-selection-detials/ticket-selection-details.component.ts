import { Component, OnInit } from '@angular/core';
import {PassengerDetails} from '../../event-selection/PassengerDetails';
import {PassengerSelectionComponent} from '../../event-selection/passenger-selection/passenger-selection.component';

@Component({
  selector: 'app-ticket-selection-detials',
  templateUrl: './ticket-selection-details.component.html',
  styleUrls: ['./ticket-selection-details.component.css']
})
export class TicketSelectionDetailsComponent {

   pageName: any = 'Ticket Selection';
   adultTicket: number;
   childTicket: number;
   conTicket: number;
   date: Date = new Date();

  adultsTotal: number = 2;
  childTotal: number = 2;
  conTotal: number = 2;
  dateOfEvent: Date = new Date();
  imgUrl = 'assets/img/arena map_1.png';

  isDisplayA: boolean = false;
  isDisplayB: boolean = false;
  isDisplayC: boolean = false;

  totalCost: string = '$230.00';


  constructor( private passengerSelection: PassengerSelectionComponent) {
    // this.adultTicket = this.passengerDetails.adult;
    // this.childTicket = this.passengerDetails.child;
    // this.conTicket = this.passengerDetails.con;
    // this.date = this.passengerDetails.date;
  }

  getAdultsDetails(){
    console.log(this.adultTicket);
  }



  toggleDisplayA(){
    this.isDisplayA = !this.isDisplayA;
    this.isDisplayB = false;
    this.isDisplayC = false;
  }

  toggleDisplayB(){
    this.isDisplayB = !this.isDisplayB;
    this.isDisplayA = false;
    this.isDisplayC = false;
  }

  toggleDisplayC(){
    this.isDisplayC = !this.isDisplayC;
    this.isDisplayA = false;
    this.isDisplayB = false;
  }



}

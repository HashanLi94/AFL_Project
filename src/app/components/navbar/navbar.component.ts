import { Component, OnInit } from '@angular/core';
import {PassengerSelectionComponent} from '../event-selection/passenger-selection/passenger-selection.component';
import {TicketSelectionDetailsComponent} from '../ticket-selection/ticket-selection-detials/ticket-selection-details.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageNameEventSelection: string = 'Event Selection';
  pageNameTicketSelection: string = 'Ticket Selection';

  constructor(private passengerSelection: PassengerSelectionComponent, private ticketSelection: TicketSelectionDetailsComponent) { }

  ngOnInit(): void {
  }
  getPageName(){
    if (this.pageNameEventSelection === this.passengerSelection.pageName){
      return this.pageNameEventSelection;
    } else if ( this.pageNameTicketSelection === this.ticketSelection.pageName){
      return this.pageNameTicketSelection;
    }

  }


}

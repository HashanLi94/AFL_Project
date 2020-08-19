import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {PassengerSelectionComponent} from './components/event-selection/passenger-selection/passenger-selection.component';
import {TicketSelectionDetailsComponent} from './components/ticket-selection/ticket-selection-detials/ticket-selection-details.component';
import {ExtrasSelectionComponent} from './components/extras-selection/extras-selection.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RodLaverAreanaComponent} from './components/ticket-selection/rod-laver-areana/rod-laver-areana.component';
import {SearchTripDetailsComponent} from './components/search-trip-details-only/search-trip-details/search-trip-details.component';


const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'passengerDetails', component: PassengerSelectionComponent},
  {path: 'ticketSelection', component: TicketSelectionDetailsComponent},
  {path: 'rod-laver-arena', component: RodLaverAreanaComponent},
  {path: 'extras-selection', component: ExtrasSelectionComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'search-tripDetails', component: SearchTripDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

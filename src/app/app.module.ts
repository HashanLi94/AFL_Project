import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PassengerSelectionComponent } from './components/event-selection/passenger-selection/passenger-selection.component';
import {
  AccordionModule, BreadcrumbModule,
  ButtonModule,
  CalendarModule, CardModule,
  ChartModule, CheckboxModule, DropdownModule,
  InputNumberModule,
  InputTextModule,
  MenuModule,
  MessageModule, PanelModule, RadioButtonModule, ToastModule
} from 'primeng';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TicketSelectionDetailsComponent } from './components/ticket-selection/ticket-selection-detials/ticket-selection-details.component';
import { RodLaverAreanaComponent } from './components/ticket-selection/rod-laver-areana/rod-laver-areana.component';
import { ExtrasSelectionComponent } from './components/extras-selection/extras-selection.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { SearchTripDetailsComponent } from './components/search-trip-details-only/search-trip-details/search-trip-details.component';
import { SummerySearchTripDetailsComponent } from './components/search-trip-details-only/summery-search-trip-details/summery-search-trip-details.component';
import { FlightsHotelsComponent } from './components/search-trip-details-only/flights-hotels/flights-hotels.component';
import { FlightsOnlyComponent } from './components/search-trip-details-only/flights-only/flights-only.component';
import { HotelsOnlyComponent } from './components/search-trip-details-only/hotels-only/hotels-only.component';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PassengerSelectionComponent,
    NavbarComponent,
    TicketSelectionDetailsComponent,
    RodLaverAreanaComponent,
    ExtrasSelectionComponent,
    SearchTripDetailsComponent,
    SummerySearchTripDetailsComponent,
    FlightsHotelsComponent,
    FlightsOnlyComponent,
    HotelsOnlyComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenuModule,
    InputTextModule,
    ChartModule,
    ButtonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule,
    CalendarModule,
    MessageModule,
    CardModule,
    ToastModule,
    PanelModule,
    DropdownModule,
    BreadcrumbModule,
    CheckboxModule,
    AppRoutingModule,
    RadioButtonModule

  ],
  providers: [
    PassengerSelectionComponent,
    TicketSelectionDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

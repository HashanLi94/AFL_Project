import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rod-laver-areana',
  templateUrl: './rod-laver-areana.component.html',
  styleUrls: ['./rod-laver-areana.component.css']
})
export class RodLaverAreanaComponent implements OnInit {
  adultsTotal: number = 2;
  childTotal: number = 2;
  conTotal: number = 2;
  dateOfEvent: Date = new Date();
  imgUrl = 'assets/img/arena map_1.png';

  constructor() { }

  ngOnInit(): void {
  }

}

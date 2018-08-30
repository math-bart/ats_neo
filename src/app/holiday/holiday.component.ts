import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  usedHolidays = [
    {startDate: '2017-11-21', endDate: '2017-11-28'},
    {startDate: '2017-11-21', endDate: '2017-11-28'},
    {startDate: '2017-11-21', endDate: '2017-11-28'},
    {startDate: '2017-11-21', endDate: '2017-11-28'},
    {startDate: '2017-11-21', endDate: '2017-11-28'},
    {startDate: '2017-11-21', endDate: '2017-11-28'}
    ];
  requestedHolidays = [
    {startDate: '2017-11-21', endDate: '2017-11-28', status: 'in progress'},
    {startDate: '2017-11-21', endDate: '2017-11-28', status: 'accepted'},
    {startDate: '2017-11-21', endDate: '2017-11-28', status: 'refused'},
    {startDate: '2017-11-21', endDate: '2017-11-28', status: 'in progress'},
    {startDate: '2017-11-21', endDate: '2017-11-28', status: 'accepted'},
    {startDate: '2017-11-21', endDate: '2017-11-28', status: 'refused'}
  ];
  cards = [ false, false, false ];
  constructor() { }

  ngOnInit() {
  }
  showMore(id) {
    this.cards[id] = !this.cards[id];
  }
}

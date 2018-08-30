import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.scss']
})
export class AcceptRequestComponent implements OnInit {
  requestedHolidays = [
    { employee: 'Bartosz Wojtaś', startDate: '2017-11-21', endDate: '2017-11-28', days: '5', daysRemaining: '7' },
    { employee: 'Bartosz Wojtaś', startDate: '2017-11-21', endDate: '2017-11-28', days: '5', daysRemaining: '7' },
    { employee: 'Bartosz Wojtaś', startDate: '2017-11-21', endDate: '2017-11-28', days: '5', daysRemaining: '7' },
    { employee: 'Bartosz Wojtaś', startDate: '2017-11-21', endDate: '2017-11-28', days: '5', daysRemaining: '7' },
    { employee: 'Bartosz Wojtaś', startDate: '2017-11-21', endDate: '2017-11-28', days: '5', daysRemaining: '7' },
    { employee: 'Bartosz Wojtaś', startDate: '2017-11-21', endDate: '2017-11-28', days: '5', daysRemaining: '7' }
  ];
  cards = [ false, false, false ];
  constructor() { }

  ngOnInit() {
  }
  showMore(id) {
    this.cards[id] = !this.cards[id];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-request',
  templateUrl: './holiday-request.component.html',
  styleUrls: ['./holiday-request.component.scss']
})
export class HolidayRequestComponent implements OnInit {
  permissionFrom = ['', 'person1', 'person2', 'person3', 'person4'];
  checkboxPermission = false;
  checkboxClientInfo = false;
  startTime = 0;
  endTime = 0;
  numberOfDays = 0;
  constructor() { }

  ngOnInit() {
  }

  changeAccept(e) {
    this.checkboxPermission = e !== '';
  }
  setTimeRange(s, e) {
    if (s === 'start') {
      this.startTime = e.value;
    } else {
      this.endTime = e.value;
    }
    let diff = (this.endTime - this.startTime) / 86400000 + 1;
    if (diff > 0 && this.startTime !== 0) {
      this.numberOfDays = diff;
    } else {
      this.numberOfDays = 0;
    }
  }

  sendRequest() {
    if (this.numberOfDays === 0) {
      alert('Podaj właściwy zakres dat');
    } else if (this.checkboxPermission === false || this.checkboxClientInfo === false)  {
      alert('Zaznacz wymagane pola');
    } else {
      alert('Wysłano');
    }
  }
}

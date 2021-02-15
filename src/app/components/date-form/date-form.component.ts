import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css']
})
export class DateFormComponent {

  constructor() { }

  data: DateData = { count: 0, datePicker: "" };

  @Output() dateDataEvent = new EventEmitter<DateData>();
  
  getDateData(event: any): void {
    event.preventDefault();

    const count = event.target.count.value;
    const datePicker = event.target.datePicker.value;

    this.dateDataEvent.emit(new DateData(count, datePicker));
  }

}

export class DateData  {
  constructor(public count?: number, public datePicker?: string) {}
}
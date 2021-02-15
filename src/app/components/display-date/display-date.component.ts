import { Component, Input, SimpleChanges } from '@angular/core';
import { DateData } from '../date-form/date-form.component';

@Component({
  selector: 'app-display-date',
  templateUrl: './display-date.component.html',
  styleUrls: ['./display-date.component.css']
})
export class DisplayDateComponent {
  updatedDateData: DateDataDisplay = new DateDataDisplay({ count: 0, datePicker: "0/0/0000" });;
 
  @Input()
  dataItem: DateData;
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dataItem'] && changes['dataItem'].currentValue) {
      if(changes.dataItem.currentValue !== changes.dataItem.previousValue) {
        this.updatedDateData = new DateDataDisplay(changes.dataItem.currentValue);
      }
    }
  }
}

export class DateDataDisplay extends DateData {
  public firstLetter: string;

  constructor(public dateData: DateData) {
    super();
    
    const dateString = new Date(this.dateData.datePicker).toUTCString();
    this.firstLetter = dateString[0]; 
  }
}

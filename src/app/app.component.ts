import { Component } from '@angular/core';
import { DateData } from './components/date-form/date-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: DateData;

  dataDataHandler(event: DateData): void {
    this.data = event;
  }
}

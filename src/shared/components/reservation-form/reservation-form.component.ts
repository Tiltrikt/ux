import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal, ViewChild} from '@angular/core';
import {DateAdapter} from '@angular/material/core';
import {
  DateRange,
  DefaultMatCalendarRangeStrategy, MatCalendar,
  MatCalendarCellClassFunction,
  MatRangeDateSelectionModel
} from '@angular/material/datepicker';
// Ensure the moment package and its type declarations are installed
// npm install moment --save
// npm install @types/moment --save-dev
import moment from 'moment';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  standalone: false,
})
export class ReservationFormComponent {

  startDate: Date | null;
  endDate: Date | null;

  @ViewChild(MatCalendar) calendar?: MatCalendar<Date>;

  constructor(){

    this.endDate = new Date();

    this.startDate = new Date(this.endDate);
    this.startDate.setMonth(this.startDate.getMonth() - 1);
  }

  dateRange: DateRange<Date | null> = new DateRange<Date | null>(null, null);

  onSelect(date: Date | null): void {
    if (!this.startDate || (this.startDate && this.endDate)) {
      this.startDate = date;
      this.endDate = null;
    } else {
      if (this.startDate && date && date > this.startDate) {
        this.endDate = date;
      } else {
        this.endDate = this.startDate;
        this.startDate = date;
      }
    }
    this.dateRange = new DateRange<Date>(this.startDate, this.endDate);
  }
}

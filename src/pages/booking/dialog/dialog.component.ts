import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {ContactFormModel} from '../../../shared/components/reservation-form/contact-info/contact-info.component';
import {MatListItem, MatListModule} from '@angular/material/list';
import {DateRange} from '@angular/material/datepicker';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatListItem, MatListModule, RouterLink, MatIcon, RouterLinkActive],
  styleUrl: './dialog.component.css',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public contactForm: ContactFormModel) {
  }

  formatDateRange(dateRange: DateRange<Date>): string {
    const formatOptions: Intl.DateTimeFormatOptions = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const formatter = new Intl.DateTimeFormat('ru-RU', formatOptions);
    return `${formatter.format(dateRange.start!)} - ${formatter.format(dateRange.end!)}`;
  }
}

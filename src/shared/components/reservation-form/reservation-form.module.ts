import {ChangeDetectionStrategy, forwardRef, NgModule} from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCard, MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyTelInput} from '../input/phone-input/phone-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {
  DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerModule,
  MatRangeDateSelectionModel
} from '@angular/material/datepicker';
import {ReservationFormComponent} from './reservation-form.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {CdkOverlayOrigin} from '@angular/cdk/overlay';


@NgModule({
  declarations: [ReservationFormComponent],
  exports: [ReservationFormComponent],
  imports: [
    MatCardModule, MatDatepickerModule, MatFormFieldModule, MatDatepickerModule, CdkOverlayOrigin
  ],
  providers: [{
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: DefaultMatCalendarRangeStrategy
  }]
})
export class ReservationFormModule {
}

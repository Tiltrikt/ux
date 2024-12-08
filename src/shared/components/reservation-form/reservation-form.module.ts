import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerModule
} from '@angular/material/datepicker';
import {ReservationFormComponent} from './reservation-form.component';
import {CdkOverlayOrigin} from '@angular/cdk/overlay';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MyTelInput} from '../input/phone-input/phone-input.component';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [ReservationFormComponent, ContactInfoComponent],
  exports: [ReservationFormComponent],
  imports: [
    MatCardModule, MatDatepickerModule, MatFormFieldModule, MatDatepickerModule, CdkOverlayOrigin, ReactiveFormsModule, MyTelInput, MatIcon, MatInput, MatButton, MatCheckboxModule
  ],
  providers: [{
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: DefaultMatCalendarRangeStrategy
  }]
})
export class ReservationFormModule {
}

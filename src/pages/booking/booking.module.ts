import {NgModule} from '@angular/core';
import {BookingComponent} from './booking.component';
import {MatListModule} from '@angular/material/list';
import {PageBuildingBlocksModule} from '../../shared/components/page-building-blocks/page-building-blocks.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {PriceModule} from '../../shared/components/price/price.module';
import {TranslatePipe} from '@ngx-translate/core';
import {LearnMoreContainerComponent} from '../../shared/components/learn-more-container/learn-more-container.component';
import {ReservationFormModule} from '../../shared/components/reservation-form/reservation-form.module';

@NgModule({
  declarations: [BookingComponent],
  exports: [BookingComponent],
  providers: [provideNativeDateAdapter()],
  imports: [
    MatIconModule,
    MatListModule,
    PageBuildingBlocksModule,
    PriceModule,
    ReservationFormModule,
    LearnMoreContainerComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCardModule,
    TranslatePipe
  ],
})
export class BookingModule {
}

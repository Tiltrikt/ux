import { Component } from '@angular/core';
import {ContentComponent} from '../../../shared/building-block/content/content.component';
import {ContainerComponent} from '../../../shared/building-block/container/container.component';
import {PriceListComponent} from '../../../shared/price/price-list/price-list.component';

@Component({
  selector: 'app-booking',
  imports: [
    ContentComponent,
    ContainerComponent,
    PriceListComponent
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

}

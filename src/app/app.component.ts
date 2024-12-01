import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContainerComponent} from './shared/building-block/container/container.component';
import {LearnMoreContainerComponent} from './shared/learn-more-container/learn-more-container.component';
import {PriceComponent} from './shared/price/price/price.component';
import {PriceListComponent} from './shared/price/price-list/price-list.component';
import {HomeComponent} from './features/home/page/home.component';
import {KitchenComponent} from './features/kitchen/page/kitchen.component';
import {BookingComponent} from './features/booking/page/booking.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent, LearnMoreContainerComponent, PriceComponent, PriceListComponent, HomeComponent, KitchenComponent, BookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ux';
}

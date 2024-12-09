import {Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {KitchenComponent} from '../pages/kitchen/kitchen.component';
import {BookingComponent} from '../pages/booking/booking.component';

export const routes: Routes = [
  {path: '', redirectTo: 'about-home', pathMatch: 'full'},
  {path: 'about-home', component: HomeComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'booking', component: BookingComponent}
];

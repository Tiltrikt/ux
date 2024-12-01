import { Component } from '@angular/core';
import {PriceComponent} from '../price/price.component';

@Component({
  selector: 'app-price-list',
  imports: [
    PriceComponent
  ],
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.css'
})
export class PriceListComponent {

}

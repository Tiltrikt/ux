import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrl: './price-item.component.css',
  standalone: false
})
export class PriceItemComponent {
  @Input() title: string = 'Ubytovanie';
  @Input() price: number = 25;
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  @Input() title: string = 'Ubytovanie';
  @Input()price: number = 25;
}

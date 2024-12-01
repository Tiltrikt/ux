import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() imageAddress: string = "about-home.webp";
  @Input() secondaryText: string = "Description";
  @Input() primaryText: string = "T";
}

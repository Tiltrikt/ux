import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css',
  standalone: false
})
export class CardItemComponent {
  @Input() imageAddress: string = "about-home.png";
  @Input() secondaryText: string = "Description";
  @Input() primaryText: string = "T";
}

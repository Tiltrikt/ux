import {Component, Input} from '@angular/core';
import {CardItemComponent} from '../building-block/card-item/card-item.component';
import {MenuItem} from '../../../features/kitchen/model/menu-item.model';

@Component({
  selector: 'app-card-grid',
  imports: [
    CardItemComponent
  ],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})
export class CardGridComponent {

  @Input() menuItems: MenuItem[] = [];
}

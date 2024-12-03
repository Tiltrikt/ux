import {Component, Input} from '@angular/core';
import {MenuItem} from '../../../services/menu/menu-item.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css',
  standalone: false
})
export class CardGridComponent {

  @Input() menuItems: MenuItem[] = [];
}

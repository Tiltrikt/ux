import {Component} from '@angular/core';
import {MenuItemRepository} from '../../shared/services/menu/menu-item.repository';
import {MenuItem} from '../../shared/services/menu/menu-item.model';
import {MenuCategory} from '../../shared/services/menu/menu-category';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css',
  standalone: false
})
export class KitchenComponent {
  protected readonly MenuCategory = MenuCategory;

  constructor(private repository: MenuItemRepository) {
  }

  getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
    return this.repository.getAllMenuItems(category);
  }
}

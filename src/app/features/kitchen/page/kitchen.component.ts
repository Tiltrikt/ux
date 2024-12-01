import { Component } from '@angular/core';
import {ContainerComponent} from '../../../shared/building-block/container/container.component';
import {ContentComponent} from '../../../shared/building-block/content/content.component';
import {LearnMoreContainerComponent} from '../../../shared/learn-more-container/learn-more-container.component';
import {CardGridComponent} from '../../../shared/card-grid/component/card-grid.component';
import {RouterOutlet} from '@angular/router';
import {MenuItemRepository} from '../model/menu-item.repository';
import {MenuItem} from '../model/menu-item.model';
import {MenuCategory} from '../model/menu-category';
import {DescriptionComponent} from '../description/description.component';

@Component({
  selector: 'app-kitchen',
  imports: [
    ContainerComponent,
    ContentComponent,
    CardGridComponent,
    DescriptionComponent
  ],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  protected readonly MenuCategory = MenuCategory;

  constructor(private repository: MenuItemRepository) {
  }

  getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
    return this.repository.getMenuItems(category);
  }
}

import {Injectable} from "@angular/core";
import {StaticDataSource} from "./static.datasource";
import {MenuItem} from './menu-item.model';
import {MenuCategory} from './menu-category';

@Injectable({
  providedIn: 'root'
})
export class MenuItemRepository {

  private menuItems: MenuItem[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getMenuItems().subscribe(data => {
      this.menuItems = data;
    });
  }

  getMenuItems(category: MenuCategory | null = null): MenuItem[] {
    return this.menuItems
      .filter(p => category == null || category == p.category);
  }
}

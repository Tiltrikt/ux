import {Injectable} from "@angular/core";
import {MenuItem} from "./menu-item.model";
import {Observable} from "rxjs";
import {of} from "rxjs";
import {MenuCategory} from './menu-category';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {

  private menuItems: MenuItem[] = [
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.BREAKFAST),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.BREAKFAST),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.BREAKFAST),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.BREAKFAST),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.BREAKFAST),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.LUNCH),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.LUNCH),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.LUNCH),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.LUNCH),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.LUNCH),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.LUNCH),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.LUNCH),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.DINNER),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.DINNER),
    new MenuItem("DSC_0820-min.jpg", "Praženica s oravskou slaninou", "€5", MenuCategory.DINNER)
  ];

  getMenuItems(): Observable<MenuItem[]> {
    return of(this.menuItems);
  }
}

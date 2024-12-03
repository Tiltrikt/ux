import {Injectable} from "@angular/core";
import {MenuItem} from "./menu-item.model";
import {Observable, of} from "rxjs";
import {MenuCategory} from './menu-category';

@Injectable({
  providedIn: 'root',
})
export class StaticDataSource {

  private menuItems: MenuItem[] = [
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
    {
      imageAddress: "DSC_0820-min.jpg",
      description: "Praženica s oravskou slaninou",
      price: "€5",
      category: MenuCategory.BREAKFAST
    },
  ];

  getMenuItems(): Observable<MenuItem[]> {
    return of(this.menuItems);
  }
}

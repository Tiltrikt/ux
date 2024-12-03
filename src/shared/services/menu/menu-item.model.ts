import {MenuCategory} from './menu-category';

export interface MenuItem {
  imageAddress: string,
  description: string,
  price: string,
  category: MenuCategory,
}

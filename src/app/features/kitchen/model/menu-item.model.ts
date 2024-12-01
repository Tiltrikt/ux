import {MenuCategory} from './menu-category';

export class MenuItem {
  constructor(
    public imageAddress?: string,
    public description?: string,
    public price?: string,
    public category?: MenuCategory,
  ) { }
}

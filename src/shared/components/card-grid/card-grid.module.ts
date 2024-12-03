import {NgModule} from '@angular/core';
import {CardGridComponent} from './component/card-grid.component';
import {CardItemComponent} from './building-blocks/card-item/card-item.component';

@NgModule({
  declarations: [
    CardGridComponent,
    CardItemComponent
  ],
  exports: [
    CardGridComponent,
    CardItemComponent
  ]
})
export class CardGridModule {
}

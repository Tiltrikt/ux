import {NgModule} from '@angular/core';
import {CardGridComponent} from './component/card-grid.component';
import {CardItemComponent} from './building-blocks/card-item/card-item.component';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    CardGridComponent,
    CardItemComponent
  ],
  imports: [
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf
  ],
  exports: [
    CardGridComponent,
    CardItemComponent,
    ScrollingModule
  ]
})
export class CardGridModule {
}

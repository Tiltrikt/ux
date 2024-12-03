import {NgModule} from '@angular/core';
import {PriceItemComponent} from './price-item/price-item.component';
import {PriceListComponent} from './price-list/price-list.component';

@NgModule({
  declarations: [
    PriceListComponent,
    PriceItemComponent
  ],
  exports: [
    PriceListComponent
  ]
})
export class PriceModule {
}

import {KitchenComponent} from './kitchen.component';
import {NgModule} from '@angular/core';
import {PageBuildingBlocksModule} from '../../shared/components/page-building-blocks/page-building-blocks.module';
import {CardGridModule} from '../../shared/components/card-grid/card-grid.module';
import {TranslatePipe} from '@ngx-translate/core';

@NgModule({
  bootstrap: [KitchenComponent],
  declarations: [KitchenComponent],
  exports: [KitchenComponent],
  imports: [
    TranslatePipe,
    PageBuildingBlocksModule,
    CardGridModule
  ]
})
export class KitchenModule {
}

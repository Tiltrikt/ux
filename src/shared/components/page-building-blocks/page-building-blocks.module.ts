import {NgModule} from '@angular/core';
import {PageContainerComponent} from './page-container/page-container.component';
import {PageContentComponent} from './page-content/page-content.component';
import {PageDescriptionComponent} from './page-description/page-description.component';
import {CardGridModule} from '../card-grid/card-grid.module';

@NgModule({
  declarations: [
    PageContainerComponent,
    PageContentComponent,
    PageDescriptionComponent,
  ],
  exports: [
    PageContainerComponent,
    PageContentComponent,
    PageDescriptionComponent
  ],
  imports: [
    CardGridModule
  ]
})
export class PageBuildingBlocksModule {
}

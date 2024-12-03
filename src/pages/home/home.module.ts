import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {PageBuildingBlocksModule} from '../../shared/components/page-building-blocks/page-building-blocks.module';
import {LearnMoreContainerComponent} from '../../shared/components/learn-more-container/learn-more-container.component';
import {TranslatePipe} from "@ngx-translate/core";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    TranslatePipe,
    PageBuildingBlocksModule,
    LearnMoreContainerComponent
  ]
})
export class HomeModule {
}

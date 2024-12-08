import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatListItem, MatListModule, MatNavList} from '@angular/material/list';
import {RouterOutlet} from '@angular/router';
import {NavigationListComponent} from './building-blocks/navigation-list/navigation-list.component';
import {NavigationItemComponent} from "./building-blocks/navigation-item/navigation-item.component";


@NgModule({
    declarations: [
        NavigationComponent,
        NavigationListComponent,
        NavigationItemComponent
    ],
    exports: [
        NavigationComponent,
        NavigationItemComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        RouterOutlet,
        MatNavList,
        MatIcon,
        MatListItem
    ]
})
export class NavigationModule {
}

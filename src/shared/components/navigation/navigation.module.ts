import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatListItem, MatListModule, MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavigationListComponent} from './building-blocks/navigation-list/navigation-list.component';
import {NavigationItemComponent} from "./building-blocks/navigation-item/navigation-item.component";


@NgModule({
    declarations: [
        NavigationListComponent,
        NavigationItemComponent
    ],
    exports: [
        NavigationItemComponent,
        NavigationListComponent
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
        MatListItem,
        RouterLink,
        RouterLinkActive
    ]
})
export class NavigationModule {
}

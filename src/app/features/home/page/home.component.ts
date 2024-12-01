import { Component } from '@angular/core';
import {ContainerComponent} from '../../../shared/building-block/container/container.component';
import {LearnMoreContainerComponent} from '../../../shared/learn-more-container/learn-more-container.component';
import {ContentComponent} from '../../../shared/building-block/content/content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterOutlet} from '@angular/router';
import {NavigationRailComponent} from '../../../shared/navigation/navigation-rail/navigation-rail.component';

@Component({
  selector: 'app-home',
  imports: [
    ContainerComponent,
    LearnMoreContainerComponent,
    ContentComponent,
    MatSidenavModule,
    MatNavList,
    MatIcon,
    RouterOutlet,
    NavigationRailComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

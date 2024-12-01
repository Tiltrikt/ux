import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {MatFabButton} from '@angular/material/button';
import {NavItemComponent} from '../nav-item/nav-item.component';

@Component({
  selector: 'app-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  imports: [
    MatFabButton,
    NavItemComponent
  ],
  styleUrl: './navigation-rail.component.css'
})
export class NavigationRailComponent {

}

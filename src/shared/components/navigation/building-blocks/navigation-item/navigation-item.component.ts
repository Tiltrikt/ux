import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  standalone: false,
  styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {

  @Input() public fullWidthNavItems = signal(false);
}

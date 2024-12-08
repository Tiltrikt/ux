import {Component, Input, Output, signal} from '@angular/core';
import {MatNavList} from '@angular/material/list';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  standalone: false,
  styleUrl: './navigation-list.component.css'
})
export class NavigationListComponent {

  public navItems: string[] = ['Dashboard'];

  @Output() hovered: boolean = false;

  @Input() public fullWidthNavItems = signal(false);

  changeToHovered() {
    this.hovered = true;
  }
}

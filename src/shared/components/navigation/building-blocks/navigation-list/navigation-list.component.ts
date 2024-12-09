import {Component, Input, Output, signal} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  standalone: false,
  styleUrl: './navigation-list.component.scss'
})
export class NavigationListComponent {

  @Output() hovered: boolean = false;

  @Input() public fullWidthNavItems = signal(false);
  private icons: string[] = [
    "house_icon",
  ]

  constructor(private iconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
  }

  changeToHovered() {
    this.hovered = true;
  }

  ngOnInit() {
    this.registerIcons(this.icons);
  }

  private registerIcons(icons: string[]) {
    for (const icon of icons) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl("house_icon_ttt.svg")
      );
    }
  }
}

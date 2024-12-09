import {Component, inject, OnInit, signal} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigationEnd, Router, Scroll} from '@angular/router';
import {filter, map} from 'rxjs';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '', '.json');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ux';

  public isSidenavOpen = signal(false);

  constructor(private iconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'house_icon_ttt',
      this.domSanitizer.bypassSecurityTrustResourceUrl('house_icon_ttt.svg')
    );
  }

  toggleSideNav(open: boolean) {
    this.isSidenavOpen.update(b => open);
  }

}

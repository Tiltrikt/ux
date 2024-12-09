import {Component, inject, signal} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Subject, takeUntil} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '', '.json');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'ux';

  openedNavigation: boolean = true

  public isSidenavOpen = signal(false);

  destroyed = new Subject<void>();

  constructor(private iconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'house_icon_ttt',
      this.domSanitizer.bypassSecurityTrustResourceUrl('house_icon_ttt.svg')
    );

    inject(BreakpointObserver)
      .observe([Breakpoints.XSmall])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        this.openedNavigation = !result.matches;
      });
  }

  toggleSideNav(open: boolean) {
    if (this.openedNavigation) {
      this.isSidenavOpen.update(() => open);
    }
  }
}

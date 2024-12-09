import {NgModule, provideZoneChangeDetection} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClient, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {KitchenModule} from "../pages/kitchen/kitchen.module";
import {HomeModule} from "../pages/home/home.module";
import {BookingModule} from "../pages/booking/booking.module";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {RouterModule, RouterOutlet} from '@angular/router';
import {routes} from './app.routes';
import {NavigationModule} from '../shared/components/navigation/navigation.module';
import {MatButton} from '@angular/material/button';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}

@NgModule({
  imports: [
    KitchenModule,
    BrowserModule,
    TranslatePipe,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'sk',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    HomeModule,
    BookingModule,
    RouterOutlet,
    RouterModule.forRoot(routes, {
      enableViewTransitions: true,
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    }),
    NavigationModule,
    MatButton,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatIconModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(withInterceptorsFromDi()),
    MatIconRegistry,
    provideAnimationsAsync()
  ],
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {KitchenModule} from "../pages/kitchen/kitchen.module";
import {HomeModule} from "../pages/home/home.module";
import {BookingModule} from "../pages/booking/booking.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}

@NgModule({
  imports: [
    KitchenModule,
    BrowserModule,
    TranslatePipe,
    HttpClientModule,
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
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule {
}

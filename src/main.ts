import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

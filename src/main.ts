import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  // @ts-ignore supress missing types warning
  require('@objectiv/developer-tools');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

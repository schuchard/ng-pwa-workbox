import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => registerServiceWorker('sw'))
  .catch(err => console.log(err));

function registerServiceWorker(swName: string) {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker
      .register(`/${swName}.js`)
      .then(reg => console.log('[App] Successful service worker registration', reg))
      .catch(err => console.error('[App] Service worker registration failed', err));
  } else {
    console.warn('[App] Service Worker API is disabled');
  }
}

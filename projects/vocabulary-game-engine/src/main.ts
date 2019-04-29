import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import '@webcomponents/custom-elements/custom-elements.min.js';
// import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

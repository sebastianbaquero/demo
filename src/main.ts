import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Configurar todo el ambiente para una aplicación Web
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

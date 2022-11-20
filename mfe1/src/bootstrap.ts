export const ELEMENT_REF = 'ELEMENT_REF';
export const SHELL_ROUTER_EVENT_NAME = 'SHELL_ROUTER_EVENT_NAME';
export const MF_LIST_EVENT_NAME = 'MF_LIST_EVENT_NAME';
export const INITIAL_PATH = 'INITIAL_PATH';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = (
  element_name: string,
  mfListEventName: string[] = [],
  sellRouterEventName?: string,
  initialPath?: string
) => {
  platformBrowserDynamic([
    { provide: ELEMENT_REF, useValue: element_name },
    { provide: SHELL_ROUTER_EVENT_NAME, useValue: sellRouterEventName },
    { provide: MF_LIST_EVENT_NAME, useValue: mfListEventName },
    { provide: INITIAL_PATH, useValue: initialPath },
  ])
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

if (environment?.isIsolate === 'true') {
  mount('app-root');
}

export { mount };

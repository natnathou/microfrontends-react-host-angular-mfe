export const ELEMENT_REF = 'ELEMENT_REF';
export const EVENT_NAME_TO_UPDATE_SHELL_FROM_ROUTING_CHANGES = 'SHELL_ROUTER_EVENT_NAME';
export const EVENT_NAME_TO_BE_UPDATED_FROM_SHELL_ROUTING_CHANGES = 'MF_LIST_EVENT_NAME';
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
  eventNameToUpdateShellFromRoutingChanges?: string,
  eventNameToBeUpdatedFromShellRoutingChanges?: string,
  initialPath?: string
) => {
  platformBrowserDynamic([
    { provide: ELEMENT_REF, useValue: element_name },
    { provide: EVENT_NAME_TO_UPDATE_SHELL_FROM_ROUTING_CHANGES, useValue: eventNameToBeUpdatedFromShellRoutingChanges },
    { provide: EVENT_NAME_TO_BE_UPDATED_FROM_SHELL_ROUTING_CHANGES, useValue: eventNameToUpdateShellFromRoutingChanges },
    { provide: INITIAL_PATH, useValue: initialPath },
  ])
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

if (environment?.isIsolate === 'true') {
  mount('app-root');
}

export { mount };

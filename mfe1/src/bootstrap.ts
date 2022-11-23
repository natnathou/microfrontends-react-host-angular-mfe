export const ELEMENT_REF = 'ELEMENT_REF';
export const EVENT_NAME_TO_UPDATE_SHELL_FROM_ROUTING_CHANGES = 'SHELL_ROUTER_EVENT_NAME';
export const EVENT_NAME_TO_BE_UPDATED_FROM_SHELL_ROUTING_CHANGES = 'MF_LIST_EVENT_NAME';
export const INITIAL_PATH = 'INITIAL_PATH';

if (!(window as any)['Zone']) {
  require('zone.js');
}

import {enableProdMode, Injector, PlatformRef} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];



const mount = (
  element_name: string,
  eventNameToUpdateShellFromRoutingChanges?: string,
  eventNameToBeUpdatedFromShellRoutingChanges?: string,
  initialPath?: string
) => {
  const extraProviders = [
    { provide: ELEMENT_REF, useValue: element_name },
    {
      provide: EVENT_NAME_TO_UPDATE_SHELL_FROM_ROUTING_CHANGES,
      useValue: eventNameToBeUpdatedFromShellRoutingChanges,
    },
    {
      provide: EVENT_NAME_TO_BE_UPDATED_FROM_SHELL_ROUTING_CHANGES,
      useValue: eventNameToUpdateShellFromRoutingChanges,
    },
    { provide: INITIAL_PATH, useValue: initialPath },
  ];

  (window as any).platform = (window as any).platform || {};

  let platform: PlatformRef =(window as any).platform[ngVersion];
  if(!platform){
    platform = platformBrowserDynamic(extraProviders);
    (window as any).platform[ngVersion] = platform;
  } else{
    (platform as any)._injector = Injector.create({
      providers: extraProviders,
      parent: platform.injector,
    })
  }

  platform.bootstrapModule(AppModule).catch((err: any) => console.error(err));
};

if (environment?.isIsolate === 'true') {
  mount('app-root');
}

export { mount };

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

export const mount = (
    el: HTMLElement | null,
    eventNameToUpdateShellFromRoutingChanges?: string,
    eventNameToBeUpdatedFromShellRoutingChanges?: string,
    initialPath?: string
) => {
    if (!el) throw new Error('Failed to find the root element');
    const root = createRoot(el);
    root.render(<App
        eventNameToUpdateShellFromRoutingChanges={eventNameToUpdateShellFromRoutingChanges}
        eventNameToBeUpdatedFromShellRoutingChanges={eventNameToBeUpdatedFromShellRoutingChanges}
        initialPath={initialPath}
    />);
};

if (process.env.IS_ISOLATE) {
    const rootElement = document.getElementById('root');
    mount(rootElement);
}



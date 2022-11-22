import React from 'react';
import './scss/app.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';


export interface AppProps{
	eventNameToUpdateShellFromRoutingChanges?: string,
	eventNameToBeUpdatedFromShellRoutingChanges?: string,
	initialPath?: string
}


export default ({ eventNameToUpdateShellFromRoutingChanges, eventNameToBeUpdatedFromShellRoutingChanges, initialPath }: AppProps) => {
	const router = createBrowserRouter([
		{
			path: '*',
			element:
				<Root
				eventNameToUpdateShellFromRoutingChanges={eventNameToUpdateShellFromRoutingChanges}
						   eventNameToBeUpdatedFromShellRoutingChanges={eventNameToBeUpdatedFromShellRoutingChanges}
						   initialPath={initialPath}
				/>,
			children: [
			],
		},
	]);

	return <RouterProvider router={router} />;
};

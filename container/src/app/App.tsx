import React from 'react';
import './scss/app.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Mfe1Container } from './Mfe1/Mfe1Container';
import { Root } from './Root';
export const SHELL_ROUTER_EVENT_NAME = 'shell_router_event_name';
export const LIST_EVENT_NAME = ['mf1-event-name'];

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'mfe1',
				element: <Mfe1Container />,
			},
		],
	},
]);

export default () => {
	return <RouterProvider router={router} />;
};

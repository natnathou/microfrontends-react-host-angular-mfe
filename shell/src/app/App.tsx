import React from 'react';
import './scss/app.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Mfe1Container } from './mfe1/Mfe1Container';
import { Root } from './Root';
import { Mfe2Container } from './mfe2/Mfe2Container';
export const EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES = 'shell_router_event_name';
export const EVENT_NAME_TO_UPDATE_MFE_FROM_ROUTING_CHANGES = 'mf1-event-name';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'mfe1',
				element: <Mfe1Container />,
			},
			{
				path: 'mfe2.yml',
				element: <Mfe2Container />,
			},
		],
	},
]);

export default () => {
	return <RouterProvider router={router} />;
};

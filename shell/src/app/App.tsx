import React from 'react';
import './scss/app.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';
export const EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES = 'shell_router_event_name';
export const EVENT_NAME_TO_UPDATE_MFE_FROM_ROUTING_CHANGES = 'mf1-event-name';
const Mfe1Container = React.lazy(() => import('./mfe1/Mfe1Container'));
const Mfe2Container = React.lazy(() => import('./mfe2/Mfe2Container'));
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
				path: 'mfe2',
				element: <Mfe2Container />,
			},
		],
	},
]);

export default () => {
	return <RouterProvider router={router} />;
};

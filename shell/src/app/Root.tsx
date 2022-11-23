import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES } from './App';

export const Root = () => {
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener(EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES, (event: Event) => {
			const customEvent = event as CustomEvent;
			navigate(customEvent.detail);
		});
	}, []);
	return (
		<div>
			new update
			Header Shell
			<Outlet />
		</div>
	);
};

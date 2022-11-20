import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SHELL_ROUTER_EVENT_NAME } from './App';

export const Root = () => {
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener(SHELL_ROUTER_EVENT_NAME, (event: Event) => {
			const customEvent = event as CustomEvent;
			navigate(customEvent.detail);
		});
	}, []);
	return (
		<div>
			Header
			<Outlet />
		</div>
	);
};

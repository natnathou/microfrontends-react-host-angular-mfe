import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { mount } from 'mfe1/Component';
import { LIST_EVENT_NAME, SHELL_ROUTER_EVENT_NAME } from '../App';
const MF1_ELEMENT = 'mf1-element';

export const Mfe1Container = () => {
	const ref = useRef<HTMLDivElement>(null);
	const location = useLocation();

	useEffect(() => {
		if (ref) {
			const element = document.createElement(MF1_ELEMENT);
			ref.current?.appendChild(element);
			mount(
				MF1_ELEMENT,
				LIST_EVENT_NAME,
				SHELL_ROUTER_EVENT_NAME,
				location.pathname,
			);
		}
	}, []);
	return <div ref={ref}></div>;
};

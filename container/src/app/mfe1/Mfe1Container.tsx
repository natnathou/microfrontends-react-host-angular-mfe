import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { mount } from 'mfe1/Component';
import { EVENT_NAME_TO_UPDATE_MFE_FROM_ROUTING_CHANGES, EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES } from '../App';
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
				EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES,
				EVENT_NAME_TO_UPDATE_MFE_FROM_ROUTING_CHANGES,
				location.pathname,
			);
		}
	}, []);
	return <div ref={ref}></div>;
};

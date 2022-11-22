import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { mount } from 'mfe2/Component';
import { EVENT_NAME_TO_UPDATE_MFE_FROM_ROUTING_CHANGES, EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES } from '../App';

export const Mfe2Container = () => {
	const ref = useRef<HTMLDivElement>(null);
	const location = useLocation();

	useEffect(() => {
		if (ref) {
			mount(
				ref.current,
				EVENT_NAME_TO_BE_UPDATED_FROM_MFE_ROUTING_CHANGES,
				EVENT_NAME_TO_UPDATE_MFE_FROM_ROUTING_CHANGES,
				location.pathname,
			);
		}
	}, []);
	return  <div className={'mfe'}><div ref={ref} ></div></div>;
};

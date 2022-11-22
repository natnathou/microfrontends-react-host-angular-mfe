import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppProps } from './App';


export type RootProps = Pick<AppProps, 'eventNameToUpdateShellFromRoutingChanges' | 'eventNameToBeUpdatedFromShellRoutingChanges' | 'initialPath'>

export const Root = ({ eventNameToUpdateShellFromRoutingChanges, eventNameToBeUpdatedFromShellRoutingChanges, initialPath }: RootProps) => {

	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if(initialPath){
			navigate(initialPath);
		}
	}, []);

	useEffect(()=>{
		if(eventNameToBeUpdatedFromShellRoutingChanges){
			window.addEventListener(eventNameToBeUpdatedFromShellRoutingChanges, (e) => {
				const event = e as CustomEvent;
				if (event.detail !== location.pathname) {
					navigate(location.pathname);
				}
			});
		}


		return ()=>{
			if(eventNameToBeUpdatedFromShellRoutingChanges){
				window.removeEventListener(eventNameToBeUpdatedFromShellRoutingChanges, () => {
					console.log(`${eventNameToBeUpdatedFromShellRoutingChanges} event is removed from mfe2`);
				});
			}

		};
	},[]);


	useEffect(()=>{
		if(eventNameToUpdateShellFromRoutingChanges){
			const customEvent = new CustomEvent(eventNameToUpdateShellFromRoutingChanges, {
				detail: location.pathname,
			});
			window.dispatchEvent(customEvent);
		}

	},[location]);

	return (
		<div>
			Mfe2
			<Outlet />
		</div>
	);
};

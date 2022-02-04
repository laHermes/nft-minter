import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import { call } from '../../services/web3/multicall/multicall';

// app layout interface
interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Navigation = ({ children }: ILayout) => {
	call();
	return (
		<div className='wrapperStyle'>
			<SideBar />
			<main className='mainStyle'>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Navigation;

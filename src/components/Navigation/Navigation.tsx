import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import { call } from '../../services/web3/multicall/multicall';

// app layout interface
interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// class names for components
const wrapperStyle = 'flex flex-row min-h-screen bg-gray-100 text-gray-800';
const mainStyle =
	'main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in';
// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Navigation = ({ children }: ILayout) => {
	call();
	return (
		<div className={wrapperStyle}>
			<SideBar />
			<main className={mainStyle}>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Navigation;

import React from 'react';
import SideBar from './SideBar';
import Header from './Header';

// app layout interface
interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Navigation = ({ children }: ILayout) => {
	return (
		<div className='wrapperStyle'>
			{/* <SideBar /> */}
			<main className='mainStyle'>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Navigation;

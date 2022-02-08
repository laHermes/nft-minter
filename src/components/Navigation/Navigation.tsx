import React from 'react';
import Header from './Header';

// app layout interface
interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Navigation = ({ children }: ILayout) => {
	return (
		<main className='mainStyle'>
			<Header />
			{children}
		</main>
	);
};

export default Navigation;

import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

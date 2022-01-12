import React from 'react';

interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
	return <div className='mx-auto max-w-screen-lg p-5'>{children}</div>;
};

export default Layout;

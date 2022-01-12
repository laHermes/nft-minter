import React from 'react';

interface ILayout {
	children: JSX.Element | null;
}

const Layout = ({ children }: ILayout) => {
	return <div className='container max-w-screen-lg'>{children}</div>;
};

export default Layout;

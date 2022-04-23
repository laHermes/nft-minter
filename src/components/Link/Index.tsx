import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface IStyledLink {
	to: string;
	children?: React.ReactNode;
}

const Index: React.FC<IStyledLink & LinkProps> = ({
	to,
	children,
	...props
}) => {
	return (
		<Link
			className='bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-500 px-[12px] py-[10px] rounded-[12px] hover:bg-transparent font-bold'
			{...props}
			to={to}>
			{children}
		</Link>
	);
};

export default Index;

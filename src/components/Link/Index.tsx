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
			className='transition-all bg-gradient-to-r text-white from-indigo-500 hover:from-indigo-400 via-purple-500 hover:via-purple-400 to-pink-500 hover:to-pink-400 px-[12px] py-[10px] rounded-[12px] hover:bg-transparent font-bold'
			{...props}
			to={to}>
			{children}
		</Link>
	);
};

export default Index;

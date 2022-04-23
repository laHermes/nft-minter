import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface IStyledLink {
	to: string;
	children?: React.ReactNode;
}

const LinkStyled: React.FC<
	IStyledLink &
		React.ForwardRefExoticComponent<
			LinkProps & React.RefAttributes<HTMLAnchorElement>
		>
> = ({ to, children, ...props }) => {
	return (
		<Link {...props} to={to}>
			{children}
		</Link>
	);
};

export default LinkStyled;

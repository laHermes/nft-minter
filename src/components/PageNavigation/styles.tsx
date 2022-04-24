import React from 'react';

// types
import { IButton, IChildren } from 'types';

// icons
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

const PageNavigationWrapper = ({ children }: IChildren) => {
	return (
		<nav className='inline-flex items-center gap-5 p-2  text-lg  border-white w-fit rounded-md text-white'>
			{children}
		</nav>
	);
};

const PreviousPage: React.FC<
	IButton & React.HTMLAttributes<HTMLButtonElement>
> = ({ ...props }) => {
	return (
		<button {...props}>
			<AiOutlineCaretLeft className='navigationArrow' />
		</button>
	);
};

const NextPage: React.FC<IButton & React.HTMLAttributes<HTMLButtonElement>> = ({
	...props
}) => {
	return (
		<button {...props}>
			<AiOutlineCaretRight className='navigationArrow' />
		</button>
	);
};

export { PageNavigationWrapper, PreviousPage, NextPage };

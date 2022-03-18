import { ReactNode } from 'react';

interface IChildren {
	children: ReactNode;
}

const NavigationPrimary = ({ children }: IChildren) => {
	return <div className='headerTop'>{children}</div>;
};

export const LogoText = ({ children }: IChildren) => {
	return (
		<div className='inline-flex'>
			<span className='text-indigo-900 text-2xl font-black inter'>
				{children}
			</span>
		</div>
	);
};

export const BlockchainInfo = ({ children }: IChildren) => {
	return (
		<div className='inline-flex'>
			<span className='text-indigo-900 text-2xl font-black inter'>
				{children}
			</span>
		</div>
	);
};

NavigationPrimary.LogoText = LogoText;

export default NavigationPrimary;

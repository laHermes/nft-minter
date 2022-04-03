import React from 'react';
import { IChildren } from '../../types';

const HeaderTextLogo = ({ children }: IChildren) => {
	return (
		<div className='inline-flex'>
			<span className='text-indigo-900 text-2xl font-black inter'>
				{children}
			</span>
		</div>
	);
};

const HeaderConnectionWrapper = ({ children }: IChildren) => {
	return <div className='flex flex-row gap-2 text-xl'>{children}</div>;
};

const HeaderInfoCard = ({ children }: IChildren) => {
	return (
		<div className='backdrop-blur-sm  rounded-md px-2 py-1 bg-white/5'>
			<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-md'>
				{children}
			</p>
		</div>
	);
};

export { HeaderTextLogo, HeaderConnectionWrapper, HeaderInfoCard };

import React from 'react';
import { IChildren } from '../../types';

const HeaderTextLogo = ({ children }: IChildren) => {
	return (
		<p className='text-indigo-900 text-2xl font-black inter'>{children}</p>
	);
};

const HeaderConnectionWrapper = ({ children }: IChildren) => {
	return <div className='flex flex-row gap-2 text-xl'>{children}</div>;
};

const HeaderInfoCard = ({ children }: IChildren) => {
	return (
		<div className='backdrop-blur-sm rounded-md px-2 py-1 bg-white/5'>
			<p className='font-extrabold text-transparent text-8xl '>{children}</p>
		</div>
	);
};

export { HeaderTextLogo, HeaderConnectionWrapper, HeaderInfoCard };

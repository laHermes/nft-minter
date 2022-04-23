import React from 'react';
import { IChildren } from '../../../types';

const NftCardWrapper = ({ children }: IChildren) => {
	return (
		<div className='p-[2px] bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400 rounded-[12px]'>
			<div className='flex flex-col gap-2 p-3 h-full bg-blue-nft-theme/80 rounded-[12px]'>
				{children}
			</div>
		</div>
	);
};
const TitleHolder = ({ children }: IChildren) => {
	return (
		<div className='flex flex-row justify-between'>
			<p className='font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
				{children}
			</p>
		</div>
	);
};
const ImageHolder = ({ children }: IChildren) => {
	return <div className='h-64'>{children}</div>;
};

export { NftCardWrapper, TitleHolder, ImageHolder };

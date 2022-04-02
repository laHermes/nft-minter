import React from 'react';
import { IChildren } from '../../../types';

const BlockchainInfoCard = ({ children }: IChildren) => {
	return (
		<div className='backdrop-blur-sm  rounded-md px-2 py-1 bg-white/5'>
			<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-md'>
				{children}
			</p>
		</div>
	);
};

export default BlockchainInfoCard;

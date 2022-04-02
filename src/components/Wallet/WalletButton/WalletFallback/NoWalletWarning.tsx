import React from 'react';
import { BiWalletAlt } from 'react-icons/bi';

const NoWalletWarning = () => {
	return (
		<div className='h-96 w-full flex flex-col gap-3 justify-start p-20'>
			<BiWalletAlt className='self-center text-5xl text-white/70' />
			<p className='self-center text-xl text-white/70'>
				Please connect you wallet!
			</p>
		</div>
	);
};

export default NoWalletWarning;

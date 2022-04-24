import React from 'react';
import { BiWalletAlt } from 'react-icons/bi';
import { IChildren } from 'types';

const WalletFallback = ({ children }: IChildren) => {
	return (
		<div className='h-96 w-full flex flex-col gap-3 justify-start p-20'>
			<BiWalletAlt className='self-center text-4xl text-white/40' />
			<p className='self-center text-xl text-white/40'>{children} </p>
		</div>
	);
};

export { WalletFallback };

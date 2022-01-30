import React from 'react';
import WalletButton from '../WalletButton/Index';

const Index = () => {
	return (
		<div className='flex flex-row justify-around bg-gray-700 py-3 px-5'>
			<WalletButton />
			<p className='text-indigo-200 font-bold text-lg'>NFTmint</p>
			<p className='text-indigo-200'>Collection</p>
		</div>
	);
};

export default Index;

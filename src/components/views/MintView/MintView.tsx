import React from 'react';
import MintCard from '../../Minting/MintCardHeading/Index';
import MintControl from '../../Minting/MintControl/Index';

const Mint = () => {
	return (
		<div className='flex flex-col gap-4 max-w-md mx-auto p-5'>
			<MintCard />
			<MintControl />
		</div>
	);
};

export default Mint;
import React from 'react';
import useMinter from '../../../hooks/useMinter';

import MintCard from '../../MintCardHeading/Index';
import IncrementButton from '../../MintControl/IncrementButton';
import DecrementButton from '../../MintControl/DecrementButton';
import CountToMint from '../../MintControl/CountToMint';

const Mint = () => {
	const { count, increment, decrement, mint } = useMinter();

	return (
		<div className='flex flex-col gap-4 max-w-md mx-auto p-5'>
			<MintCard />
			<div className='flex flex-row gap-2 content-center justify-between text-indigo-50'>
				<DecrementButton handler={decrement} />
				<CountToMint count={count} />
				<IncrementButton handler={increment} />
			</div>
			<div className='flex flex-col justify-between'>
				<button
					onClick={mint}
					className='text-sky-500 py-4 font-black rounded-lg text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
					Mint
				</button>
			</div>
		</div>
	);
};

export default Mint;

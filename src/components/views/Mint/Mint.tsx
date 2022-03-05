import React from 'react';
import useMinter from '../../../hooks/useMinter';
import NFTImage from '../../../assets/nft.png';
import polygonLogo from '../../../assets/polygon-matic-logo.svg';
import ImageLoader from './ImageLoader';
import MintCard from './MintCard';

const Mint = () => {
	const { count, increment, decrement, mint } = useMinter();

	return (
		<div className='flex flex-col gap-4 max-w-md mx-auto px-4'>
			<MintCard />

			<div className='flex flex-row gap-2 content-center justify-between text-indigo-50'>
				<button
					onClick={decrement}
					className='w-16 h-16 inline-flex flex-1 justify-center text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md rounded-md hover:ring hover:ring-white'>
					-
				</button>
				<input
					readOnly
					type='numbers'
					className='w-24 backdrop-blur-sm bg-inherit focus:outline-none text-indigo-50 shadow-md rounded-sm text-4xl font-bold text-center'
					value={count}
				/>
				<button
					onClick={increment}
					className='w-16 h-16 inline-flex flex-1 justify-center text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 shadow-md rounded-md hover:ring hover:ring-white'>
					+
				</button>
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

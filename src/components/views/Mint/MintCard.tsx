import React from 'react';
import ImageLoader from './ImageLoader';
import NFTImage from '../../../assets/nft.png';
import polygonLogo from '../../../assets/polygon-matic-logo.svg';

const MintCard = () => {
	return (
		<div className='p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md'>
			<div className='flex flex-col gap-4 p-3 bg-blue-nft-theme rounded-md'>
				<ImageLoader url={NFTImage} />
				<div className='flex flex-row justify-between'>
					<p className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
						Lorem Ipsum
					</p>
					<div className='inline-flex gap-1 bg-white/90 rounded-lg p-1'>
						<p className='text-indigo-900 font-bold text-md '>0.03</p>
						<img src={polygonLogo} alt='polygonLogo' className='w-5' />
					</div>
				</div>
				<p className='font-medium text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
		</div>
	);
};

export default MintCard;

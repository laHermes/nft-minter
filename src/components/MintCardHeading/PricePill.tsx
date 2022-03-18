import React from 'react';
import polygonLogo from '../../assets/polygon-matic-logo.svg';

const PricePill = ({ price }: any) => {
	return (
		<div className='inline-flex gap-1 bg-white/90 rounded-lg p-1'>
			<p className='text-indigo-900 font-bold text-md '>{price}</p>
			<img src={polygonLogo} alt='polygonLogo' className='w-5' />
		</div>
	);
};

export default PricePill;

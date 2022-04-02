import React from 'react';

interface IPricePill {
	price: string;
	logoUrl?: string;
}

const PricePill = ({ price, logoUrl }: IPricePill) => {
	return (
		<div className='inline-flex gap-1 bg-white/90 rounded-lg p-1'>
			<p className='text-indigo-900 font-bold text-md '>{price}</p>
			{logoUrl && <img src={logoUrl} alt='polygonLogo' className='w-5' />}{' '}
		</div>
	);
};

export default PricePill;

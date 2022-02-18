import React from 'react';

const Mint = () => {
	return (
		<div>
			<p>PHOTO</p>
			<p>100/100</p>
			<p>Price 0.01 mMatic</p>
			<div className='flex flex-row'>
				<button className='bg-slate-900 text-indigo-50 font-black'>+</button>
				<button className='bg-slate-900 text-indigo-50 font-black'>-</button>
			</div>
			<button className='bg-slate-900 text-indigo-50 font-black'>MINT</button>

			<p>OPENSEA</p>
			<p>PolyScan</p>
		</div>
	);
};

export default Mint;

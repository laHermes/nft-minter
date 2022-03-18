import React from 'react';
import { BiCollection } from 'react-icons/bi';

const DataWarning = () => {
	return (
		<div className='h-96 w-full flex flex-col gap-3 justify-start p-20'>
			<BiCollection className='self-center text-5xl text-white/70' />
			<p className='self-center text-xl text-white/70'>No data found</p>
		</div>
	);
};

export default DataWarning;

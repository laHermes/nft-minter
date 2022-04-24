import React from 'react';
import { InboxIcon } from '@heroicons/react/outline';
import { IDataFallback } from '../../types';

const DataFallback = ({ warningText }: IDataFallback) => {
	return (
		<div className='h-96 w-full flex flex-col gap-3 justify-start p-20'>
			<InboxIcon />
			<p className='self-center text-xl text-white/70'>{warningText}</p>
		</div>
	);
};

export default DataFallback;

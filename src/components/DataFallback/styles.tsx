import React from 'react';
import { InboxIcon } from '@heroicons/react/outline';
import { IDataFallback } from 'types';

const DataFallback = ({ warningText }: IDataFallback) => {
	return (
		<div className='motion-safe:animate-pulse h-96 w-full flex flex-col items-center gap-3 justify-start p-20'>
			<InboxIcon width={80} />
			<p className='self-center text-xl text-white/70'>{warningText}</p>
		</div>
	);
};

export default DataFallback;

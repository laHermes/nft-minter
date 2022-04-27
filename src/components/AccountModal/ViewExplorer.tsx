import { ExternalLinkIcon } from '@heroicons/react/outline';
import React from 'react';

const ViewExplorer = () => {
	return (
		<button className='inline-flex gap-1 text-white/60 text-xs'>
			<ExternalLinkIcon className='h-4 w-4' />
			View on Explorer
		</button>
	);
};

export default ViewExplorer;

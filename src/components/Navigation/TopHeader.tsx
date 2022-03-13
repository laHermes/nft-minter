import React from 'react';
import AccountGroup from './AccountGroup';

const TopHeader = () => {
	return (
		<div className='headerTop'>
			<div className='inline-flex'>
				<span className='text-indigo-900 text-2xl font-black inter'>nft.</span>
			</div>
			<AccountGroup />
		</div>
	);
};

export default TopHeader;

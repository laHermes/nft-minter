import React from 'react';
import AccountGroup from './AccountGroup';

const TopHeader = () => {
	return (
		<div className='py-2 px-4'>
			<div className='flex items-center flex-row justify-between'>
				<div className='inline-flex'>
					<span className='text-indigo-900 text-2xl font-black inter'>
						nft.
					</span>
				</div>
				<AccountGroup />
			</div>
		</div>
	);
};

export default TopHeader;

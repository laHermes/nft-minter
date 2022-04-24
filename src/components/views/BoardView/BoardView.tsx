import React from 'react';

// components
import NftsTable from 'components/Nft/Table/Index';
import StyledLink from 'components/Link/Index';

const Board = () => {
	return (
		<div className='max-w-screen-lg mx-auto p-5 pt-8'>
			<div className='flex flex-row w-full bg-modal-base px-6 py-4 rounded-[12px]'>
				<div className='grow'>
					<h2 className='text-white text-2xl font-bold'>Mint NFT</h2>
					<p className='text-white/40 font-semibold'>
						Only minted nfts will be displayed in collection!
					</p>
				</div>
				<div className='self-center'>
					<StyledLink to='/mint'>Go To Minter </StyledLink>
				</div>
			</div>

			<NftsTable />
		</div>
	);
};

export default Board;

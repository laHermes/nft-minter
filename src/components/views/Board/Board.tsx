import React from 'react';

import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';

import NoWalletWarning from '../../NoWalletWarning/NoWalletWarning';
import NftsTable from '../../NftsTable/NftsTable';

const Board = () => {
	const { account } = useWalletConnect();

	return (
		<div className='max-w-screen-lg mx-auto p-5'>
			<div className='w-full rounded-xl border border-purple-500/20'>
				{!account ? <NoWalletWarning /> : <NftsTable />}
			</div>
		</div>
	);
};

export default Board;

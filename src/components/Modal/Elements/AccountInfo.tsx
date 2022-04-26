import React from 'react';
import useWalletConnect from 'services/web3/wallet/useWalletConnect';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { shortenString } from 'utils/pureFunctions';

const AccountInfo = () => {
	const { account } = useWalletConnect();

	return (
		<>
			<Jazzicon diameter={20} seed={jsNumberForAddress(account!)} />
			<span className='text-white text-xl leading-none'>
				{shortenString(account!)}
			</span>
		</>
	);
};

export default AccountInfo;

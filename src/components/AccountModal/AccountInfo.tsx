import React from 'react';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { shortenString } from 'utils/pureFunctions';

const AccountInfo = () => {
	const { account } = useWalletConnect();

	return (
		<>
			{account && <Jazzicon diameter={20} seed={jsNumberForAddress(account)} />}
			{account && (
				<span className='text-white text-xl leading-none'>
					{shortenString(account)}
				</span>
			)}
		</>
	);
};

export default AccountInfo;

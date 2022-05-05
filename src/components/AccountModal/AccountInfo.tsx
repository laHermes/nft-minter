import React from 'react';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { shortenString } from 'utils/pureFunctions';

interface IAccountInfo {
	address?: string;
}

const AccountInfo = ({ address }: IAccountInfo) => {
	const { account } = useWalletConnect();
	const addressCalc = address ? address : account;
	return (
		<div className='inline-flex gap-2'>
			{addressCalc && (
				<Jazzicon diameter={20} seed={jsNumberForAddress(addressCalc)} />
			)}
			{addressCalc && (
				<span className='text-white text-sm md:text-xl leading-none'>
					{shortenString(addressCalc)}
				</span>
			)}
		</div>
	);
};

export default AccountInfo;

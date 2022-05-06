import React, { useEffect, useState } from 'react';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { shortenString } from 'utils/pureFunctions';
import { ethers } from 'ethers';

interface IAccountInfo {
	address?: string;
}

const AccountInfo = ({ address }: IAccountInfo) => {
	const { account } = useWalletConnect();
	const [currentAddress, setCurrentAddress] = useState<any>('');

	useEffect(() => {
		setCurrentAddress(
			address ? address : account || ethers.constants.AddressZero
		);
	}, [address, account]);

	return (
		<div className='inline-flex gap-2'>
			{currentAddress && (
				<Jazzicon diameter={20} seed={jsNumberForAddress(currentAddress)} />
			)}
			{currentAddress && (
				<span className='text-white text-sm md:text-xl leading-none'>
					{shortenString(currentAddress)}
				</span>
			)}
		</div>
	);
};

export default AccountInfo;

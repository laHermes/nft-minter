import React from 'react';
import polygonLogo from '../../assets/polygon-logo-circle.png';
import { ExclamationIcon } from '@heroicons/react/solid';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';

const NetworkInfo = () => {
	const { chainId } = useWalletConnect();

	return (
		<div className='p-[3px]'>
			{!chainId ? (
				<ExclamationIcon className='bg-default-primary text-yellow-400 h-10 p-2 rounded-[12px] hover:bg-hover-primary' />
			) : chainId === 80001 ? (
				<img
					src={polygonLogo}
					alt='polygon logo'
					className='bg-default-primary h-10 p-2 rounded-[12px] hover:bg-hover-primary'
				/>
			) : null}
		</div>
	);
};

export default NetworkInfo;

import React from 'react';
// hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

// assets
import { ExclamationIcon } from '@heroicons/react/solid';
import polygonLogo from 'assets/polygon-logo-circle.png';

import { Button } from 'components/Elements/Button/Index';

import { EthNetworks } from 'services/web3/types';

const NetworkInfo = () => {
	const { chainId } = useWalletConnect();

	return (
		<Button>
			{!chainId || chainId !== EthNetworks.Mumbai ? (
				<ExclamationIcon className='text-yellow-400 h-6' />
			) : (
				<img alt='Network Icon' src={polygonLogo} className='h-6' />
			)}
		</Button>
	);
};

export default NetworkInfo;

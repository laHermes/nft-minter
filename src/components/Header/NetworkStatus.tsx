import React from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';
import { Button } from 'components/Elements/Button/Button';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { EthNetworks } from 'services/web3/types';
import polygonLogo from 'assets/polygon-logo-circle.png';

const NetworkStatus = () => {
	const { chainId } = useWalletConnect();

	return (
		<Button>
			{chainId! in EthNetworks ? (
				// TODO: add multiple network
				// build url
				<img alt='Polygon' src={polygonLogo} className='h-6' />
			) : (
				<ExclamationIcon className='text-yellow-400 h-6' />
			)}
		</Button>
	);
};

export default NetworkStatus;

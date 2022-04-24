import React from 'react';
// hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

// assets
import { ExclamationIcon } from '@heroicons/react/solid';
import polygonLogo from 'assets/polygon-logo-circle.png';

import { EthNetworks } from 'services/web3/types';

const withHigherOrder = (Component: React.FC) => (props: any) => {
	const { chainId } = useWalletConnect();
	if (!chainId || chainId !== EthNetworks.Mumbai)
		return (
			<ExclamationIcon className='bg-default-primary text-yellow-400 h-10 p-2 rounded-[12px] hover:bg-hover-primary' />
		);

	return <Component {...props} />;
};

// network icon
const NetIcon: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({
	...props
}) => <img {...props} alt='Network Icon' />;

const NetworkIcon = withHigherOrder(NetIcon);

const NetworkInfo = () => {
	return (
		<div className='p-[3px]'>
			<NetworkIcon
				src={polygonLogo}
				alt='polygon logo'
				className='bg-default-primary h-10 p-2 rounded-[12px] hover:bg-hover-primary'
			/>
		</div>
	);
};

export default NetworkInfo;

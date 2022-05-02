import React from 'react';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { SUPPORTED_WALLETS } from 'services/web3/wallet/utils';
import { Button } from 'components/Elements/Button/Button';

const Index: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
	...props
}) => {
	const { handleConnect } = useWalletConnect();
	const wallet = SUPPORTED_WALLETS[0];
	const connect = () => handleConnect(wallet);

	return (
		<Button onClick={connect} variant='gradientBg' {...props}>
			{props.children}
		</Button>
	);
};

export default Index;

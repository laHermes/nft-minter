import React from 'react';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { SUPPORTED_WALLETS } from 'services/web3/wallet/utils';
import { Button } from 'components/Elements/Button/Button';

interface IWalletButton {
	title: string;
}

const Index: React.FC<
	IWalletButton & React.HTMLAttributes<HTMLButtonElement>
> = ({ title, ...props }) => {
	const { handleConnect } = useWalletConnect();
	const wallet = SUPPORTED_WALLETS[0];
	const connect = () => handleConnect(wallet);

	return (
		<Button onClick={connect} variant='gradientBg' {...props}>
			{title}
		</Button>
	);
};

export default Index;

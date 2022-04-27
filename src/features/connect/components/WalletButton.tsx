import React from 'react';
import useWalletConnect from 'services/web3/wallet/useWalletConnect';
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
		<Button
			onClick={connect}
			variant='gradientBg'
			gradientBorder={true}
			{...props}>
			{title}
		</Button>
	);
};

export default Index;

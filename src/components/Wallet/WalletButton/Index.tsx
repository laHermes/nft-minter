import React from 'react';
import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import { SUPPORTED_WALLETS } from '../../../services/web3/wallet/utils';
import WalletButtonStyle from './styles';

const Index = () => {
	// extract data from custom wallet connect hook
	const { account, handleDisconnect, handleConnect } = useWalletConnect();

	// in this case I use only metamask
	// SUPPORTED_WALLETS can be mapped for more wallets if needed
	const wallet = SUPPORTED_WALLETS[0];

	//passes the right function which depends on the wallet state
	const clickHandler = account ? handleDisconnect : () => handleConnect(wallet);

	//return component
	return <WalletButtonStyle onClick={clickHandler} title='Connect wallet' />;
};

export default Index;

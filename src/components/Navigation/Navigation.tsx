import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import WalletButton from '../Wallet/WalletButton/Index';
import polygonLogo from '../../assets/polygon-logo-circle.png';
import meshLogo from '../../assets/mesh-second-logo.png';
import Links from './Links';
import Account from '../Account/Index';
import Logo from './Logo';
import NetworkInfo from './NetworkInfo';
const Navigation = () => {
	const { account } = useWalletConnect();

	return (
		<div className='headerTop'>
			<div className='inline-flex gap-12'>
				<Logo />
				<Links />
			</div>
			<div className='flex flex-row gap-2 text-xl'>
				<NetworkInfo />
				{account ? <Account /> : <WalletButton title='Connect Wallet' />}
			</div>
		</div>
	);
};

export default Navigation;

import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import WalletButton from '../Wallet/WalletButton/Index';
import polygonLogo from '../../assets/polygon-logo-circle.png';
import meshLogo from '../../assets/mesh-second-logo.png';
import { HeaderConnectionWrapper } from './styles';
import Links from './Links';
import Account from '../Account/Index';

const HeaderPrimary = () => {
	const { account } = useWalletConnect();

	return (
		<div className='headerTop'>
			<div className='inline-flex gap-12'>
				<img src={meshLogo} alt='mesh logo' className='h-12 inline' />
				<Links />
			</div>
			<HeaderConnectionWrapper>
				{account && (
					<div className='p-[3px] '>
						<img
							src={polygonLogo}
							alt='polygon logo'
							className='bg-default-primary h-10 p-2 rounded-[12px] hover:bg-hover-primary'
						/>
					</div>
				)}
				{account ? <Account /> : <WalletButton />}
			</HeaderConnectionWrapper>
		</div>
	);
};

export default HeaderPrimary;

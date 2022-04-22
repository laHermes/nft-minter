import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import WalletButton from '../Wallet/WalletButton/Index';
import polygonLogo from '../../assets/polygon-matic-logo.svg';
import meshLogo from '../../assets/mesh-second-logo.png';
import { HeaderConnectionWrapper } from './styles';
import HeaderSecondary from './HeaderSecondary';

const HeaderPrimary = () => {
	const { account, balance } = useWalletConnect();

	return (
		<div className='headerTop'>
			<div className='inline-flex gap-12'>
				<img src={meshLogo} alt='mesh logo' className='h-14' />
				<HeaderSecondary />
			</div>
			<HeaderConnectionWrapper>
				{/* {account && <HeaderInfoCard>~{balance}</HeaderInfoCard>} */}
				{account && (
					<div className='p-[3px] '>
						<img
							src={polygonLogo}
							alt='polygon logo'
							className='bg-default-primary h-10 p-2 rounded-[12px]'
						/>
					</div>
				)}
				<WalletButton />
			</HeaderConnectionWrapper>
		</div>
	);
};

export default HeaderPrimary;

import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import WalletButton from '../Wallet/WalletButton/Index';
import polygonLogo from '../../assets/polygon-matic-logo.svg';
import meshLogo from '../../assets/mesh-logo.png';
import {
	HeaderConnectionWrapper,
	HeaderInfoCard,
	HeaderTextLogo,
} from './styles';
import HeaderSecondary from './HeaderSecondary';

const HeaderPrimary = () => {
	const { account, balance } = useWalletConnect();

	return (
		<div className='headerTop'>
			<div className='inline-flex gap-12'>
				<img src={meshLogo} alt='mesh logo' className='h-8' />
				<HeaderSecondary />
			</div>
			<HeaderConnectionWrapper>
				{/* {account && <HeaderInfoCard>~{balance}</HeaderInfoCard>} */}
				{account && (
					<div className='bg-default-primary h-10 flex flex-row items-center py-1 px-2 rounded-[12px]'>
						<img src={polygonLogo} alt='polygon logo' className='h-5' />
					</div>
				)}
				<WalletButton />
			</HeaderConnectionWrapper>
		</div>
	);
};

export default HeaderPrimary;

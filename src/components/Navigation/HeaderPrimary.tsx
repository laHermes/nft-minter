import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import WalletButton from '../Wallet/WalletButton/Index';
import {
	HeaderConnectionWrapper,
	HeaderInfoCard,
	HeaderTextLogo,
} from './styles';

const HeaderPrimary = () => {
	const { account, balance } = useWalletConnect();

	return (
		<div className='headerTop'>
			<HeaderTextLogo>.nft</HeaderTextLogo>
			<HeaderConnectionWrapper>
				{account && <HeaderInfoCard>Mumbai</HeaderInfoCard>}
				{account && <HeaderInfoCard>~{balance} mMATIC</HeaderInfoCard>}
				<WalletButton />
			</HeaderConnectionWrapper>
		</div>
	);
};

export default HeaderPrimary;

import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import { SUPPORTED_WALLETS } from '../../services/web3/wallet/utils';

const Index = () => {
	const { account, handleWalletConnectButton, handleConnect } =
		useWalletConnect();

	return (
		<>
			<button
				className='px-2 py-1 border rounded-full'
				onClick={handleWalletConnectButton}>
				{account ? account : `Connect Wallet`}
			</button>

			{SUPPORTED_WALLETS.map((wallet, index) => {
				return (
					<div key={index}>
						<button
							className='px-2 py-1 border rounded-full'
							onClick={() => handleConnect(wallet.connector)}>
							{wallet.name}
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;

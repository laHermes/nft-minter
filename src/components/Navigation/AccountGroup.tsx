import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import WalletButton from '../Wallet/WalletButton/WalletButton';

const AccountGroup = () => {
	const { account, balance } = useWalletConnect();

	return (
		<div className='flex flex-row gap-2 text-xl'>
			{account && (
				<>
					<div className='backdrop-blur-sm  rounded-md px-2 py-1 bg-white/5'>
						<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-md'>
							MUMBAI
						</p>
					</div>
					<div className='backdrop-blur-sm  rounded-md px-4 py-1 bg-white/5'>
						<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-md'>
							~{balance} mMATIC
						</p>
					</div>
				</>
			)}
			<WalletButton />
		</div>
	);
};

export default AccountGroup;

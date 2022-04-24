import React from 'react';
import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import { SUPPORTED_WALLETS } from '../../../services/web3/wallet/utils';

interface IWalletButton {
	title: string;
}

const Index: React.FC<
	IWalletButton & React.HTMLAttributes<HTMLButtonElement>
> = ({ title, ...props }) => {
	const { handleConnect } = useWalletConnect();
	const wallet = SUPPORTED_WALLETS[0];
	return (
		<div className='backdrop-blur-sm text-indigo-50 text-[16px] rounded-[12px] p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
			<button
				className='bg-default-primary px-[12px] py-[10px] rounded-[12px] hover:bg-transparent font-bold'
				onClick={() => handleConnect(wallet)}
				{...props}>
				<p>{title}</p>
			</button>
		</div>
	);
};

export default Index;

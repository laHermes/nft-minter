import React from 'react';

interface IWalletButton {
	title: string;
}

// component used in WalletButton.tsx
const WalletButtonStyle: React.FC<
	IWalletButton & React.HTMLAttributes<HTMLButtonElement>
> = ({ title, ...props }) => {
	return (
		<div className='backdrop-blur-sm text-indigo-50 text-[16px] rounded-[12px] p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
			<button
				{...props}
				className='bg-default-primary transition-all px-[12px] py-[10px] rounded-[12px] hover:bg-transparent font-bold'>
				<p>{title}</p>
			</button>
		</div>
	);
};

export default WalletButtonStyle;

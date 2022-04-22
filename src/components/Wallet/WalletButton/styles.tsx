import React from 'react';

interface IWalletButton {
	clickHandler: () => void;
	title: string;
}

// component used in WalletButton.tsx
const WalletButtonStyle = ({ clickHandler, title }: IWalletButton) => {
	return (
		<div className='backdrop-blur-sm text-indigo-50 text-[16px] font-semibold rounded-[12px] p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
			<button
				onClick={clickHandler}
				className='bg-default-primary px-[14px] py-[12px] rounded-[12px] hover:bg-transparent '>
				<p>{title}</p>
			</button>
		</div>
	);
};

export default WalletButtonStyle;

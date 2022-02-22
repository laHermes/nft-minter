import React from 'react';

interface IWalletButton {
	clickHandler: () => void;
	title: string;
}

// component used in WalletButton.tsx
const WButton = ({ clickHandler, title }: IWalletButton) => {
	return (
		<button
			className='backdrop-blur-sm text-indigo-50 text-md font-semibold rounded-md px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
			onClick={clickHandler}>
			{title}
		</button>
	);
};

export default WButton;

import React from 'react';

interface IWalletButton {
	clickHandler: () => void;
	title: string;
}

// component used in WalletButton.tsx
const WButton = ({ clickHandler, title }: IWalletButton) => {
	return (
		<button
			className='text-indigo-100 text-md font-semibold border-2 border-indigo-900 rounded-md px-4 bg-gray-900'
			onClick={clickHandler}>
			{title}
		</button>
	);
};

export default WButton;

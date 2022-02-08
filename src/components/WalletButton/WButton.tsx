import React from 'react';

interface IWalletButton {
	clickHandler: () => void;
	title: string;
}

// component used in WalletButton.tsx
const WButton = ({ clickHandler, title }: IWalletButton) => {
	return (
		<button
			className='text-indigo-900 text-md border border-indigo-900 rounded-xl px-4 '
			onClick={clickHandler}>
			{title}
		</button>
	);
};

export default WButton;

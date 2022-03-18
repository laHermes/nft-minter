import { ReactNode } from 'react';

interface IMintButton {
	handler: Function;
	children: ReactNode;
}

const MintButton = ({ handler, children }: IMintButton) => {
	return (
		<button
			onClick={() => handler()}
			className='text-sky-500 py-4 font-black rounded-lg text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
			{children}
		</button>
	);
};

export default MintButton;

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IButton, IChildren, ICountToMint, IMintButton } from '../../../types';

// displays number of nfts to be minted
const CountToMint = ({ count }: ICountToMint) => {
	return (
		<input
			readOnly
			type='numbers'
			className='w-2/4 backdrop-blur-sm bg-inherit focus:outline-none text-indigo-50 shadow-md rounded-sm text-4xl font-bold text-center'
			value={count}
		/>
	);
};

const DecrementButton = ({ handler }: IButton) => {
	return (
		<button
			onClick={() => handler()}
			className='w-16 h-16 inline-flex flex-1 justify-center text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md rounded-full hover:ring hover:ring-white'>
			<AiOutlineMinus className='self-center text-5xl font-black' />
		</button>
	);
};

const IncrementButton = ({ handler }: IButton) => {
	return (
		<button
			onClick={() => handler()}
			className='w-16 h-16 inline-flex flex-1 justify-center text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 shadow-md rounded-full hover:ring hover:ring-white'>
			<AiOutlinePlus className='self-center text-5xl font-black' />
		</button>
	);
};

const MintButton = ({ handler, children }: IMintButton) => {
	return (
		<button
			onClick={() => handler()}
			className='text-sky-500 py-4 font-black rounded-lg text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
			{children}
		</button>
	);
};

const MintControl = ({ children }: IChildren) => {
	return <div className='flex flex-row gap-2 text-xl'>{children}</div>;
};

export {
	CountToMint,
	DecrementButton,
	IncrementButton,
	MintButton,
	MintControl,
};

import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface IIncrementButton {
	handler: Function;
}

const IncrementButton = ({ handler }: IIncrementButton) => {
	return (
		<button
			onClick={() => handler()}
			className='w-16 h-16 inline-flex flex-1 justify-center text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 shadow-md rounded-full hover:ring hover:ring-white'>
			<AiOutlinePlus className='self-center text-5xl font-black' />
		</button>
	);
};

export default IncrementButton;

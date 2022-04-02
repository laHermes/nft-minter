import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';

interface IDecrementButton {
	handler: Function;
}

const DecrementButton = ({ handler }: IDecrementButton) => {
	return (
		<button
			onClick={() => handler()}
			className='w-16 h-16 inline-flex flex-1 justify-center text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md rounded-full hover:ring hover:ring-white'>
			<AiOutlineMinus className='self-center text-5xl font-black' />
		</button>
	);
};

export default DecrementButton;

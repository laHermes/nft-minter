import React from 'react';

interface ICountToMint {
	count: number;
}

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

export default CountToMint;

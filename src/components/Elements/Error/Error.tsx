import React from 'react';

interface IError {
	message: string | string[];
}

const Error = ({ message }: IError) => {
	return (
		<div className=' flex flex-col gap-3 border border-red-500/40 p-4 bg-gradient-to-r from-transparent to-red-500/40 rounded-[12px] text-red-500 font-semibold'>
			{Array.isArray(message) ? (
				message.map((msg: string) => <p>{msg}</p>)
			) : (
				<p>{message}</p>
			)}
		</div>
	);
};

export default Error;

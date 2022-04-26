import { IChildren, ICountToMint } from '../../../types';

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

const DecrementButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
	...props
}) => {
	return (
		<button
			{...props}
			className='h-fit p-3 flex flex-col justify-center text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md rounded-full '>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-8 w-8'
				viewBox='0 0 20 20'
				fill='currentColor'>
				<path
					fillRule='evenodd'
					d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
					clipRule='evenodd'
					className='text-white'
				/>
			</svg>
		</button>
	);
};

const IncrementButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
	...props
}) => {
	return (
		<button
			{...props}
			className='h-fit p-3 flex flex-col justify-center text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md rounded-full '>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-8 w-8'
				viewBox='0 0 20 20'
				fill='currentColor'>
				<path
					fillRule='evenodd'
					d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
					clipRule='evenodd'
					className='text-white'
				/>
			</svg>
		</button>
	);
};

const MintButton: React.FC<
	IChildren & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
	return (
		<div className='backdrop-blur-sm text-indigo-50 text-[16px] rounded-[12px] p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
			<button
				{...props}
				className='w-full transition-all bg-default-primary px-[12px] py-[10px] rounded-[12px] hover:bg-transparent font-bold '>
				{children}
			</button>
		</div>
	);
};
const ViewCollections: React.FC<
	IChildren & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className='w-full bg-pill-grey hover:bg-zinc-200 transition-all px-[12px] py-[10px] rounded-[12px] text-white hover:text-zinc-700 font-bold'>
			{children}
		</button>
	);
};

const MintControl = ({ children }: IChildren) => {
	return (
		<div className='flex flex-row justify-between gap-2 text-xl'>
			{children}
		</div>
	);
};

export {
	CountToMint,
	MintControl,
	DecrementButton,
	IncrementButton,
	MintButton,
	ViewCollections,
};

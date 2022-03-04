import React from 'react';
import useMinter from '../../../hooks/useMinter';
import NFTImage from '../../../assets/nft.png';
import polygonLogo from '../../../assets/polygon-matic-logo.svg';

const Mint = () => {
	const { count, increment, decrement, mint } = useMinter();

	return (
		<div className='flex flex-col max-w-md mx-auto px-4'>
			<div className='p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md'>
				<div className='flex flex-col gap-4 p-3 bg-blue-nft-theme rounded-md'>
					<img src={NFTImage} alt='nft' className='rounded-md' />
					<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
						MESH NFT
					</p>
					<p className='font-medium text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
						Description{' '}
					</p>
				</div>
			</div>

			<div className='flex flex-row justify-between p-2'>
				<div className='flex flex-col justify-between'>
					<button
						onClick={mint}
						className=' text-sky-500 py-4 font-black rounded-lg text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
						Mint
					</button>
				</div>
				<div className='flex flex-row gap-2  content-center w-1/2 justify-between text-indigo-50'>
					<input
						readOnly
						type='numbers'
						className='w-full backdrop-blur-sm bg-inherit focus:outline-none shadow-md text-indigo-50 text-4xl font-bold text-center'
						value={count}
					/>
					<div className='flex flex-col gap-2'>
						<button
							onClick={increment}
							className='w-12 h-12 text-4xl font-black bg-zinc-100/10 shadow-md rounded-md'>
							+
						</button>
						<button
							onClick={decrement}
							className='w-12 h-12 inline-flex  justify-center items-center text-4xl font-black bg-zinc-100/10 shadow-md rounded-md'>
							-
						</button>
					</div>
				</div>
			</div>

			{/* 			
			<div className='backdrop-blur-xl bg-white/5 text-indigo-100 rounded-xl'>
				<div className='flex flex-col gap-5 '>
					<div className='relative'>
						<img src={NFTImage} alt='nft' className='rounded-lg shadow-xl' />
						<div className='absolute w-1/2 -bottom-3 left-0 right-0 mx-auto text-center backdrop-blur-md bg-white/80 py-1 px-2 text-indigo-900 self-center rounded-xl shadow-lg'>
							<div className='inline-flex gap-1 '>
								<p className='text-indigo-900 font-bold text-md '>0.03</p>
								<img src={polygonLogo} alt='polygonLogo' className='w-5' />
							</div>
						</div>
					</div>
					<p className='text-2xl text-indigo-50 font-medium tracking-wider self-center'>
						MeshNFT#
					</p>
					<div className='inline-flex flex-row justify-between gap-5 text-indigo-50 px-8'>
						<button
							onClick={decrement}
							className='w-16 h-16 inline-flex  justify-center items-center text-4xl font-black rounded-full bg-zinc-100/10 shadow-md'>
							-
						</button>
						<input
							readOnly
							type='numbers'
							className='w-28 h-16 backdrop-blur-sm bg-inherit focus:outline-none shadow-md text-indigo-50 text-4xl font-bold rounded-xl text-center'
							value={count}
						/>

						<button
							onClick={increment}
							className='w-16 h-16 text-4xl font-black rounded-full bg-zinc-100/10 shadow-md'>
							+
						</button>
					</div>
					<button
						onClick={mint}
						className='bg-violet-900/50 text-sky-500 py-4 font-black w-full rounded-lg text-lg'>
						Mint
					</button>
				</div>
			</div> */}
		</div>
	);
};

export default Mint;

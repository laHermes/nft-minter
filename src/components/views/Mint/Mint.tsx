import React from 'react';
import useMinter from '../../../hooks/useMinter';
import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import NFTImage from '../../../nft.png';
import polygonLogo from '../../../polygon-matic-logo.svg';

const Mint = () => {
	const { count, increment, decrement } = useMinter();
	const { account } = useWalletConnect();
	return (
		<div className='flex flex-col justify-between max-w-md mx-auto'>
			<div className='backdrop-blur-md bg-white/80 text-indigo-100 rounded-3xl mt-12 shadow-2xl p-2'>
				<div className='flex flex-col gap-3 p-3 '>
					<img src={NFTImage} alt='nft' className='rounded-3xl shadow-lg' />
					<p className='text-2xl text-indigo-800 font-medium tracking-wider self-center'>
						MeshNFT#
					</p>
					<div className='inline-flex gap-1 self-center'>
						<p className='text-indigo-900 font-bold text-2xl'>0.05</p>
						<img src={polygonLogo} alt='polygonLogo' className='w-8 ' />
					</div>
					<div className='px-3 py-5 flex flex-row justify-between gap-2 rounded-xl'>
						<input
							type='numbers'
							pattern='/^[0-9]+$/'
							className='bg-inherit focus:outline-none text-indigo-900 text-4xl font-bold rounded-xl text-center border border-indigo-900/20 max-w-sm flex-1'
							value={count}
						/>
					</div>

					<div className='flex flex-row justify-between gap-2 text-indigo-900'>
						<button
							onClick={increment}
							className=' leading-none text-4xl font-black px-3 py-1 rounded-xl border border-indigo-900/40 flex-1'>
							+
						</button>
						<button
							onClick={decrement}
							className=' leading-none text-4xl font-black px-3 py-1 rounded-xl border border-indigo-900/40 flex-1'>
							-
						</button>
					</div>
					<button className='bg-sky-900/40 text-sky-600/70 py-4 font-black w-full rounded-3xl text-lg'>
						{account ? 'Mint' : 'Connect Wallet'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Mint;

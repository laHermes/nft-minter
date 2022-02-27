import React from 'react';
import useMinter from '../../../hooks/useMinter';
import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import NFTImage from '../../../assets/nft.png';
import polygonLogo from '../../../assets/polygon-matic-logo.svg';

const Mint = () => {
	const { count, increment, decrement } = useMinter();
	const { account } = useWalletConnect();
	return (
		<div className='flex flex-col max-w-md mx-auto px-10'>
			<div className='backdrop-blur-xl bg-white/5 text-indigo-100 rounded-xl'>
				<div className='flex flex-col gap-5 '>
					<div className='relative'>
						<img src={NFTImage} alt='nft' className='rounded-lg shadow-xl' />
						<div className='absolute w-1/2 -bottom-3 left-0 right-0 mx-auto text-center backdrop-blur-md bg-white/80 py-1 px-2 text-indigo-900 self-center rounded-xl shadow-lg'>
							<div className='inline-flex gap-1 '>
								<p className='text-indigo-900 font-bold text-md'>0.05</p>
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

					<button className='bg-violet-900/50 text-sky-500 py-4 font-black w-full rounded-lg text-lg'>
						{account ? 'Mint' : 'Connect Wallet'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Mint;

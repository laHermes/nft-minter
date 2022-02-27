import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from '@headlessui/react';
import { BiWalletAlt } from 'react-icons/bi';
import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';

import NFTImage from '../../../assets/nft.png';
import polygonLogo from '../../../assets/polygon-matic-logo.svg';

const Board = () => {
	const [enabled, setEnabled] = useState(false);
	const { account } = useWalletConnect();
	return (
		<div className='w-screen max-w-screen-lg mx-auto '>
			<div className='w-full bg-white/50 rounded-xl'>
				<div className='flex flex-row border-b border-white/40 px-3 py-2'>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? 'bg-blue-600' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11 text-indigo-900`}>
						<span className='sr-only'>Enable notifications</span>
						<span
							className={`${
								enabled ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
				</div>
				{!account && (
					<div className='h-96 w-full flex flex-col gap-3 justify-start p-20'>
						<BiWalletAlt className='self-center text-5xl text-white/70' />
						<p className='self-center text-xl text-white/70'>
							Please connect you wallet!
						</p>
					</div>
				)}
				{account && (
					<div className='flex flex-col gap-3 justify-start p-10'>
						<div className='grid grid-cols-3 gap-4'>
							{[...Array(10)].map((_, index) => {
								return (
									<div
										className='backdrop-blur-xl bg-white/5 text-indigo-100 rounded-xl shadow-xl'
										key={index}>
										<div className='flex flex-col gap-5 '>
											<div className='relative'>
												<img
													src={NFTImage}
													alt='nft'
													className='rounded-lg shadow-xl'
												/>
											</div>

											<p className='text-2xl text-indigo-50 font-medium tracking-wider self-center'>
												MeshNFT#
											</p>
											<p className='text-2xl text-indigo-50 font-medium tracking-wider self-center'>
												ID
											</p>

											<button className='bg-violet-900/50 text-sky-500 py-4 font-black w-full rounded-lg text-lg'>
												{account ? 'Mint' : 'Connect Wallet'}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				)}
				<p>PAGINATION</p>
			</div>
		</div>
	);
};

export default Board;

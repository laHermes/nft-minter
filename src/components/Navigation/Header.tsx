import React from 'react';
import WalletButton from '../WalletButton/WalletButton';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import { useLocation } from 'react-router-dom';

//HEADER COMPONENT FOR NAVIGATION
const Header = () => {
	const { account, balance } = useWalletConnect();
	const location = useLocation();

	return (
		<header>
			<div className='py-2 px-4'>
				<div className='flex items-center flex-row justify-between'>
					<div className='inline-flex'>
						<span className='text-indigo-900 text-2xl font-black inter'>
							nft.
						</span>
					</div>

					<div className='flex flex-row gap-2 text-xl'>
						{account && (
							<>
								<div className='backdrop-blur-sm  rounded-md px-2 py-1 bg-white/5'>
									<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-md'>
										MUMBAI
									</p>
								</div>
								<div className='backdrop-blur-sm  rounded-md px-4 py-1 bg-white/5'>
									<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-md'>
										~{balance} mMATIC
									</p>
								</div>
							</>
						)}
						<WalletButton />
					</div>
				</div>
			</div>
			<div className='w-full py-4'>
				<div className='max-w-md mx-auto px-4 '>
					<div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl'>
						<Tab.Group>
							<Tab.List className='flex p-1 space-x-1 bg-white/50 rounded-xl text-lg'>
								<Tab
									className={`${
										location.pathname === '/mint'
											? 'bg-blue-nft-theme/90 text-blue-200/90'
											: 'hover:bg-white/90'
									} w-full py-2.5 leading-5 font-bold text-xl text-blue-700 rounded-lg `}>
									<Link to='/mint'>Mint</Link>
								</Tab>
								<Tab
									className={`${
										location.pathname === '/'
											? 'bg-blue-nft-theme/90 text-blue-200/90'
											: 'hover:bg-white/90'
									} w-full py-2.5 leading-5 font-bold text-xl text-blue-700 rounded-lg `}>
									<Link to='/'>Collection</Link>
								</Tab>
							</Tab.List>
						</Tab.Group>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

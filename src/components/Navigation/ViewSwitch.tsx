import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';

const ViewSwitch = () => {
	const location = useLocation();

	return (
		<div className='w-full py-4'>
			<div className='max-w-md mx-auto px-4 '>
				<div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl'>
					<Tab.Group>
						<Tab.List className='flex p-1 space-x-1 bg-white/50 rounded-xl text-lg'>
							<Tab
								className={`${
									location.pathname === '/mint'
										? 'bg-blue-nft-theme/40 text-blue-100'
										: 'hover:bg-white/90'
								} w-full py-2.5 leading-5 font-bold text-xl text-blue-700 rounded-lg `}>
								<Link to='/mint'>Mint</Link>
							</Tab>
							<Tab
								className={`${
									location.pathname === '/'
										? 'bg-blue-nft-theme/40 text-blue-100'
										: 'hover:bg-white/90'
								} w-full py-2.5 leading-5 font-bold text-xl text-blue-700 rounded-lg `}>
								<Link to='/'>Collection</Link>
							</Tab>
						</Tab.List>
					</Tab.Group>
				</div>
			</div>
		</div>
	);
};

export default ViewSwitch;

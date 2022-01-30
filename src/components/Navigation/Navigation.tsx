import React from 'react';
import WalletButton from '../WalletButton/Index';
import { RiHammerLine } from 'react-icons/ri';
import { HiOutlineCollection } from 'react-icons/hi';
import { AiOutlineShop } from 'react-icons/ai';

interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}
const Navigation = ({ children }: ILayout) => {
	return (
		<div className='flex flex-row min-h-screen bg-gray-100 text-gray-800'>
			<aside className='sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-slate-900'>
				<div className='sidebar-header flex items-center justify-center py-4'>
					<div className='inline-flex'>
						<span className='leading-10 text-gray-100 text-2xl font-bold ml-1 '>
							NFTzzz
						</span>
					</div>
				</div>
				<div className='sidebar-content py-6'>
					<ul className='text-lg text-indigo-200 font-extrabold'>
						<li>
							<button>
								<div className='w-full border-l-slate-900 border-l-8 hover:border-l-8 hover:border-l-indigo-200 pl-4 py-3 inline-flex'>
									<RiHammerLine className='text-2xl mr-2' />
									<p>Minter</p>
								</div>
							</button>
						</li>
						<li>
							<button>
								<div className='w-full border-l-slate-900 border-l-8 hover:border-l-8 hover:border-l-indigo-200 pl-4 py-3 inline-flex'>
									<HiOutlineCollection className='text-2xl mr-2' />
									<p>Collections</p>
								</div>
							</button>
						</li>
						<li>
							<button>
								<div className='w-full border-l-slate-900 border-l-8 hover:border-l-8 hover:border-l-indigo-200 pl-4 py-3 inline-flex'>
									<AiOutlineShop className='text-2xl mr-2' />
									Marketplace
								</div>
							</button>
						</li>
					</ul>
				</div>
			</aside>
			<main className='main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in'>
				<header className='header bg-white shadow py-4 px-4'>
					<div className='header-content flex items-center flex-row'>
						<div className='flex ml-auto'>
							<WalletButton />
						</div>
					</div>
				</header>
				{children}
			</main>
		</div>
	);
};

export default Navigation;

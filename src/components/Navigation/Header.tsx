import React from 'react';
import WalletButton from '../WalletButton/WalletButton';
import { HiOutlineCollection } from 'react-icons/hi';
import { AiOutlineShop } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';

interface IComponent {
	componentName: React.FC;
	label: string;
	href: string;
	key: number;
}

// SIDEBAR COMPONENTS
const sideComponents: IComponent[] = [
	{
		componentName: HiOutlineCollection,
		label: 'Collections',
		href: '/',
		key: 1,
	},
	{
		componentName: AiOutlineShop,
		label: 'Marketplace',
		href: '/market',
		key: 3,
	},
];

//HEADER COMPONENT FOR NAVIGATION
const Header = () => {
	return (
		<header>
			<div className='py-2 px-4'>
				<div className='flex items-center flex-row justify-between'>
					<div className='inline-flex'>
						<span className='text-indigo-900 text-2xl font-black inter'>
							nft.
						</span>
					</div>
					{/* <div className='flex flex-row text-lg text-indigo-50'>
						<Link to='/mint'>
							<button className='px-2'>
								<p className='inline-flex font-bold border p-1'>Minter</p>
							</button>
						</Link>
						<Link to='/mint'>
							<button className='px-2'>
								<p className='inline-flex font-bold border p-1'>Collection</p>
							</button>
						</Link>
						<Link to='/mint'>
							<button className='px-2'>
								<p className='inline-flex font-bold border p-1'>
									Yield Farming
								</p>
							</button>
						</Link>
					</div> */}

					{/* <div>
					{sideComponents.map((component: any) => {
						//maps component from array of component
						//renders dynamic component from array
						const DynamicComponent: React.FC = component.componentName;
						return (
							<Link to={component.href} key={component.key}>
								<button className='px-2'>
									<div className='inline-flex'>
										<div className='text-xl mr-2 self-center'>
											<DynamicComponent />
										</div>
										<p className='text-md'>{component.label}</p>
									</div>
								</button>
							</Link>
						);
					})}
				</div> */}

					<div className='flex flex-row gap-2 text-xl'>
						<div className='backdrop-blur-sm text-indigo-800 text-md font-semibold rounded-md px-4 py-1 bg-white/70'>
							Polygon Mumbai
						</div>
						<div className='backdrop-blur-sm text-indigo-800 text-md font-semibold rounded-md px-4 py-1 bg-white/70'>
							~ 0 mMATIC
						</div>
						<WalletButton />
					</div>
				</div>
			</div>
			<div className='w-full py-4'>
				<div className='max-w-md mx-auto'>
					<Tab.Group>
						<Tab.List className='flex p-1 space-x-1 bg-white/50 rounded-xl text-lg'>
							<Tab className='w-full py-2.5  leading-5 font-medium text-blue-700 rounded-lg hover:bg-white/90'>
								<Link to='/mint'>Mint</Link>
							</Tab>
							<Tab className='w-full py-2.5  leading-5 font-medium text-blue-700 rounded-lg hover:bg-white/90'>
								<Link to='/'>Collection</Link>
							</Tab>
							<Tab className='w-full py-2.5  leading-5 font-medium text-blue-700 rounded-lg hover:bg-white/90'>
								<Link to='/mint'>Yield Farming</Link>
							</Tab>
						</Tab.List>
					</Tab.Group>
				</div>
			</div>
		</header>
	);
};

export default Header;

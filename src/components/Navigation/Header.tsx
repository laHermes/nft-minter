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
		<header className='bg-gray-800 shadow py-2 px-4'>
			<div className='flex items-center flex-row justify-between'>
				<div className='inline-flex'>
					<span className='text-indigo-100 text-2xl font-black inter'>
						nft.
					</span>
				</div>
				<Link to='/mint'>
					<button className='px-2'>
						<div className='inline-flex'>
							<p className='text-md'>MINTER</p>
						</div>
					</button>
				</Link>
				<p>Collection</p>
				<p>Yield Farming</p>
				<div>
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
				</div>

				<div className='flex flex-row gap-2 text-xl'>
					<div className='bg-slate-900 font-semibold text-indigo-50 px-2 pv-1 rounded-md'>
						Dark
					</div>
					<div className='bg-slate-900 font-semibold text-indigo-50 px-4 pv-1 rounded-md '>
						Polygon Mumbai
					</div>
					<div className='bg-slate-900 font-semibold text-indigo-50 px-2 pv-1 rounded-md'>
						0 mMATIC
					</div>
					<WalletButton />
				</div>
			</div>
		</header>
	);
};

export default Header;

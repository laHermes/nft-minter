import { Fragment } from 'react';

// router
import { Link, useLocation } from 'react-router-dom';

// components
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';
import { Button } from 'components/Elements/Button/Button';

const MobileLinks = () => {
	const location = useLocation();

	const navObjects = [
		{
			label: 'Mint',
			location: '/',
		},
		{
			label: 'Collection',
			location: '/collection',
		},
	];

	return (
		<div className='text-right lg:hidden'>
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button as={Button}>
						<MenuIcon
							className='h-5 w-5 text-violet-200 hover:text-violet-100'
							aria-hidden='true'
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'>
					<Menu.Items className='focus:outline-none absolute right-0 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
						<div className='px-1 py-1 '>
							{navObjects.map((object) => {
								return (
									<Menu.Item key={object.location}>
										<Link
											className={`${
												location.pathname === object.location
													? 'bg-hover-primary/80 text-white'
													: 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-hover-primary hover:text-white my-1`}
											to={object.location}>
											{object.label}
										</Link>
									</Menu.Item>
								);
							})}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default MobileLinks;

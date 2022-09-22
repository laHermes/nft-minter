import React from 'react';

// svgs
import meshLogo from 'assets/mesh-second-logo.png';

//components
import Links from './Links';
import NetworkStatus from './NetworkStatus';
import ConnectAccount from './ConnectAccount';
import MobileLinks from './MobileLinks';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='max-w-screen-lg w-full mx-auto transition-all duration-150 ease-in;'>
			<div className='flex items-center content-center flex-row justify-between py-2 px-4 pt-5'>
				<div className='flex flex-row gap-6'>
					<Link to='/'>
						<img src={meshLogo} alt='mesh logo' className='h-12' />
					</Link>
					<Links />
				</div>
				<div className='flex flex-row gap-2'>
					<NetworkStatus />
					<ConnectAccount />
					<MobileLinks />
				</div>
			</div>
		</header>
	);
};

export default Header;

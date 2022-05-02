import React from 'react';

// svgs
import meshLogo from 'assets/mesh-second-logo.png';

//components
import Links from './Links';
import NetworkStatus from './NetworkStatus';
import ConnectAccount from './ConnectAccount';
import MobileLinks from './MobileLinks';

const Header = () => {
	return (
		<header className='navigationStyle'>
			<div className='headerTop'>
				<div className='flex flex-row gap-6'>
					<img src={meshLogo} alt='mesh logo' className='h-12' />
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

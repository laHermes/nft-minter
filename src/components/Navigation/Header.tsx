import React from 'react';
import WalletButton from '../WalletButton/WalletButton';

//HEADER COMPONENT FOR NAVIGATION

const Header = () => {
	return (
		<header className='header bg-white shadow py-4 px-4'>
			<div className='header-content flex items-center flex-row'>
				<div className='flex ml-auto'>
					<WalletButton />
				</div>
			</div>
		</header>
	);
};

export default Header;

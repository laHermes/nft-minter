import React from 'react';

import TopHeader from './TopHeader';
import ViewSwitch from './ViewSwitch';

//HEADER COMPONENT FOR NAVIGATION
const Header = () => {
	return (
		<header>
			<TopHeader />
			<ViewSwitch />
		</header>
	);
};

export default Header;

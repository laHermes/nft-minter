import React from 'react';
import { useLocation } from 'react-router-dom';

import Link from 'components/Elements/Link/Link';

const Links = () => {
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
		<ul className='hidden lg:inline-flex gap-1 font-semibold text-lg pt-3'>
			{navObjects.map((object) => {
				return (
					<li key={object.location}>
						<Link
							variant={
								location.pathname === object.location
									? 'headerActive'
									: 'headerDisable'
							}
							to={object.location}>
							{object.label}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Links;

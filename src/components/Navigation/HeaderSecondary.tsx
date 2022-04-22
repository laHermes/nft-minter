import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HeaderSecondary = () => {
	const location = useLocation();

	const navObjects = [
		{
			label: 'Claim',
			location: '/mint',
		},
		{
			label: 'Collection',
			location: '/',
		},
	];

	return (
		<ul className='flex flex-row gap-6 font-semibold text-lg'>
			{navObjects.map((object) => {
				return (
					<li
						key={object.location}
						className={`${
							location.pathname === object.location
								? 'text-white/95'
								: 'text-white/60'
						} hover:text-white`}>
						<Link to={object.location}>{object.label}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default HeaderSecondary;

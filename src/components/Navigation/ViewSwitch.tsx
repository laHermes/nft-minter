import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ViewSwitch = () => {
	const location = useLocation();

	const navObjects = [
		{
			label: 'Mint',
			location: '/mint',
		},
		{
			label: 'Collection',
			location: '/',
		},
	];

	return (
		<div className='w-full p-4'>
			<div className='viewSwitch '>
				<ul className='viewSwitch-list'>
					{navObjects.map((object) => {
						return (
							<li
								key={object.location}
								className={`${
									location.pathname === object.location
										? 'viewSwitch-item-active'
										: 'viewSwitch-item-inactive'
								} viewSwitch-item`}>
								<Link to={object.location}>{object.label}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ViewSwitch;

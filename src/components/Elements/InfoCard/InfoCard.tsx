import React from 'react';

interface IInfoCard {
	title: string | number;
	description: string | number;
	action?: any;
}

const InfoCard = ({ title, description, action }: IInfoCard) => {
	return (
		<div className='flex flex-row w-full bg-modal-base px-6 py-4 rounded-[12px]'>
			<div className='grow'>
				<h2 className='text-white text-2xl font-bold'>{title}</h2>
				<p className='text-white/40 font-semibold'>{description} </p>
			</div>
			<div className='self-center'>{action && action}</div>
		</div>
	);
};

export default InfoCard;

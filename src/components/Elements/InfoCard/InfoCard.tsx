import React from 'react';

interface IInfoCard {
	title: string | number;
	description: string | number;
	actionComponent?: any;
}

const InfoCard = ({ title, description, actionComponent }: IInfoCard) => {
	return (
		<div className='flex flex-col gap-4 text-center md:text-left md:flex-row justify-between w-full bg-white/5 p-1 md:px-6 md:py-5 rounded-[12px]'>
			<div className='w-full'>
				<p className='text-white text-3xl font-bold'>{title}</p>
				<p className='text-white/40 text-md md:text-lg font-semibold'>
					{description}
				</p>
			</div>
			<div className='self-center pb-3 md:p-0'>
				{actionComponent && actionComponent}
			</div>
		</div>
	);
};

export default InfoCard;

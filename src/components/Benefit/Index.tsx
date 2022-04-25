import React from 'react';
import Emoji from 'a11y-react-emoji/lib/Emoji';

interface IBenefit {
	title: string;
	symbol: string;
	description: string;
}
const Index = ({ title, symbol, description }: IBenefit) => {
	return (
		<div className='flex flex-row gap-2'>
			<div className='p-2'>
				<div className='bg-white/10 rounded-full flex flex-wrap justify-center p-2'>
					<Emoji symbol={symbol} className='self-center text-2xl' />
				</div>
			</div>
			<div className='flex flex-col'>
				<h4 className='text-xl font-semibold text-white/90'>{title}</h4>
				<p className='text-md  text-white/60'>{description}</p>
			</div>
		</div>
	);
};

export default Index;

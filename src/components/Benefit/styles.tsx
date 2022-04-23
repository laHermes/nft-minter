import React from 'react';
import Emoji from 'a11y-react-emoji/lib/Emoji';

interface IBenefit {
	title: string;
	symbol: string;
	description: string;
}

const styles = ({ title, symbol, description }: IBenefit) => {
	return (
		<div className='flex flex-row gap-1'>
			<Emoji symbol='🐑' />
			<div className='flex flex-col gap-1'></div>
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	);
};

export default styles;

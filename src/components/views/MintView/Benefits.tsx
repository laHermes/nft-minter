import React from 'react';
import Benefit from 'components/Benefit/Index';

const benefits = [
	{
		title: 'No False Promises',
		description: 'No : DAO, Roadmap, Exclusive Access, Perks or Social Media',
		symbol: '🐑',
	},
	{
		title: 'Testnet',
		description:
			'Minting on Polygon Mumbai testnet so you do not have to waste any of you hard earned money! ',
		symbol: '🧪',
	},
	{
		title: 'All Yours',
		description: 'When you mint it, its all yours!',
		symbol: '🎉',
	},
];

const Benefits: React.FC = () => (
	<>
		{benefits.map(({ title, description, symbol }) => (
			<Benefit
				key={title}
				title={title}
				description={description}
				symbol={symbol}
			/>
		))}
	</>
);
export default Benefits;

import React from 'react';
import Benefit from 'components/Benefit/Index';

const benefits = [
	{
		title: 'No False Promises',
		description: 'No : DAO, Roadmap, Exclusive Access, Perks or Social Media',
		symbol: '๐',
	},
	{
		title: 'Testnet',
		description:
			'Minting on Polygon Mumbai testnet so you do not have to spend any of you hard earned money! ',
		symbol: '๐งช',
	},
	{
		title: 'All Yours',
		description: 'When you mint it, its all yours! + it is hosted on IPFS',
		symbol: '๐',
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

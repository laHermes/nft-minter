import Card from 'components/Elements/Card/Card';
import ImageLoader from 'components/ImageLoader/ImageLoader';
import React from 'react';
import { INft } from 'redux/types';
import { shortenString } from 'utils/pureFunctions';
import Attribute from './Attribute';

const NftCard = ({ metadata, owner, id }: INft) => {
	return (
		<Card>
			<ImageHolder>
				<ImageLoader src={metadata.image} />
			</ImageHolder>
			<TitleHolder>Mesh NFT #{id}</TitleHolder>
			<Attribute attribute='Owner' value={shortenString(owner)} />
			{metadata.attributes.map((attribute: any, index: number) => (
				<Attribute
					key={index}
					attribute={attribute.trait_type}
					value={attribute.value}
				/>
			))}
		</Card>
	);
};

export default NftCard;

const TitleHolder: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
}) => {
	return (
		<div className='flex flex-row justify-between'>
			<p className='font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
				{children}
			</p>
		</div>
	);
};

const ImageHolder: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
}) => {
	return <div className='h-64'>{children}</div>;
};

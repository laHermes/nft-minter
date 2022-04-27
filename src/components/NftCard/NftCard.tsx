import Card from 'components/Elements/Card/Card';
import ImageLoader from 'components/ImageLoader/ImageLoader';
import React from 'react';
import { INft } from 'redux/types';
import { shortenString } from 'utils/pureFunctions';

const NftCard = ({ metadata, owner, id }: INft) => {
	return (
		<Card>
			<ImageHolder>
				<ImageLoader src={metadata.image} />
			</ImageHolder>
			<TitleHolder>Mesh NFT #{id}</TitleHolder>
			<p className='text-sm text-indigo-50 font-medium tracking-wider '>
				Owner: {shortenString(owner)}
			</p>

			{metadata.attributes.map((attribute: any, index: number) => (
				<p key={index} className='text-md text-indigo-50 font-medium'>
					{attribute.trait_type}: {attribute.value}
				</p>
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

import React from 'react';
import { INft } from 'redux/types';
import { shortenString } from 'utils/pureFunctions';
import ImageLoader from '../../ImageLoader/ImageLoader';
import { ImageHolder, NftCardWrapper, TitleHolder } from './styles';

const Index = ({ id, owner, metadata }: INft) => {
	return (
		<NftCardWrapper>
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
		</NftCardWrapper>
	);
};

export default Index;

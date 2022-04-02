import React from 'react';
import { INft } from '../../../redux/types';
import { shortenString } from '../../../utils/pureFunctions';
import ImageLoader from '../../ImageLoader/ImageLoader';

const NftCard = ({ id, owner, metadata }: INft) => {
	return (
		<div className='p-2 bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400 rounded-md'>
			<div className='flex flex-col gap-2 p-3 h-full bg-blue-nft-theme/80 rounded-md'>
				<div className='h-64'>
					<ImageLoader url={metadata.image} />
				</div>
				<div className='flex flex-row justify-between'>
					<p className='font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
						Lorem Ipsum #{id}
					</p>
				</div>
				<p className='text-sm text-indigo-50 font-medium tracking-wider '>
					Owner: {shortenString(owner)}
				</p>
				{metadata.attributes.map((attribute: any, index: number) => (
					<p key={index} className='text-md text-indigo-50 font-medium'>
						{attribute.trait_type}: {attribute.value}
					</p>
				))}
			</div>
		</div>
	);
};

export default NftCard;

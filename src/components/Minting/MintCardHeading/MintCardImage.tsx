import React from 'react';
import ImageLoader from '../../ImageLoader/ImageLoader';

interface IMintCardImage {
	url: string;
}

const MintCardImage = ({ url }: IMintCardImage) => {
	return (
		<div className='h-80'>
			<ImageLoader url={url} />
		</div>
	);
};

export default MintCardImage;

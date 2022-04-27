import React, { useState } from 'react';

const ImageLoader: React.FC<
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
> = ({ src, ...props }) => {
	const [loaded, setLoaded] = useState<boolean>(false);

	return (
		<>
			<img
				src={src}
				alt='nft'
				className={`${loaded ? 'block' : 'hidden'} rounded-md w-full h-full`}
				onLoad={() => setLoaded(true)}
				{...props}
			/>
			<div
				className={`${
					loaded ? 'hidden' : 'block'
				} w-full h-full flex-1 animate-pulse bg-slate-900/30 rounded-md`}></div>
		</>
	);
};

export default ImageLoader;

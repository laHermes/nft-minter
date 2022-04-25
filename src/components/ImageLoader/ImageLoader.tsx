import React, { useState } from 'react';

interface IImageLoader {
	url: string;
}

const ImageLoader: React.FC<
	IImageLoader & React.HTMLAttributes<HTMLImageElement>
> = ({ url, ...props }: IImageLoader) => {
	const [loaded, setLoaded] = useState<boolean>(false);

	return (
		<>
			<img
				src={url}
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

import React, { useEffect, useState } from 'react';

interface IImageLoader {
	url: string;
}

const ImageLoader = ({ url }: IImageLoader) => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [toLoad, setToLoad] = useState<boolean>(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setToLoad(true);
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div>
			{toLoad && (
				<img
					src={url}
					alt='nft'
					className={`${loaded ? 'block' : 'hidden'} rounded-md w-full h-80`}
					onLoad={() => setLoaded(true)}
				/>
			)}
			<div
				className={`${
					loaded ? 'hidden' : 'block'
				} w-full h-80 animate-pulse bg-slate-900 p-3 rounded-md`}></div>
		</div>
	);
};

export default ImageLoader;

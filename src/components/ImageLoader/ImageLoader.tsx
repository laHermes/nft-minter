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
		}, 100);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			{toLoad && (
				<img
					src={url}
					alt='nft'
					className={`${loaded ? 'block' : 'hidden'} rounded-md w-full h-full`}
					onLoad={() => setLoaded(true)}
				/>
			)}
			<div
				className={`${
					loaded ? 'hidden' : 'block'
				} w-full h-full flex-1 animate-pulse bg-slate-900  rounded-md`}></div>
		</>
	);
};

export default ImageLoader;

import React from 'react';
import { IChildren, IMintCardImage, IPricePill } from '../../../types';
import ImageLoader from '../../ImageLoader/ImageLoader';

const MintCardImage = ({ url }: IMintCardImage) => {
	return (
		<div className='h-56'>
			<ImageLoader url={url} />
		</div>
	);
};

const PricePill = ({ price, logoUrl }: IPricePill) => {
	return (
		<div className='inline-flex gap-1 bg-white/90 rounded-[12px] p-1'>
			<p className='text-indigo-900 font-bold text-md '>{price}</p>
			{logoUrl && <img src={logoUrl} alt='polygonLogo' className='w-6 h-6' />}
		</div>
	);
};

const MintCard = ({ children }: IChildren) => {
	return (
		<div className='p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[12px]'>
			<div className='flex flex-col gap-4 p-3 bg-default-primary/90 rounded-[12px]'>
				{children}
			</div>
		</div>
	);
};

//Card Heading Components

export const ImageHolder: React.FC<
	React.HTMLAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLImageElement>
> = ({ url, ...props }: any) => {
	return (
		<div className='h-80' {...props}>
			<ImageLoader url={url} />
		</div>
	);
};

export const Heading = ({ children }: IChildren) => {
	return <div className='flex flex-row justify-between'>{children}</div>;
};

export const Title = ({ children }: IChildren) => {
	return (
		<p className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
			{children}
		</p>
	);
};

export const Description = ({ children }: IChildren) => {
	return (
		<p className='font-medium text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
			{children}
		</p>
	);
};

MintCard.ImageHolder = ImageHolder;
MintCard.Heading = Heading;
MintCard.Title = Title;
MintCard.Description = Description;

export { MintCard, MintCardImage, PricePill };

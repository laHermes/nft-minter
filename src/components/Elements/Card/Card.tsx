import React from 'react';

type CardProps = React.FC<React.HTMLAttributes<HTMLDivElement>>;

const Card: CardProps = ({ children }) => {
	return (
		<div className='p-[2px] bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400 rounded-[12px]'>
			<div className='flex flex-col gap-2 p-3 h-full bg-blue-nft-theme/80 rounded-[12px]'>
				{children}
			</div>
		</div>
	);
};

export default Card;

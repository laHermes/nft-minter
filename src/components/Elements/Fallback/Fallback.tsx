import React from 'react';

interface IFallback {
	warningText: string;
	Icon?: React.FC<any>;
}

const Fallback = ({ Icon, warningText }: IFallback) => {
	return (
		<div className='motion-safe:animate-pulse h-96 w-full flex flex-col items-center gap-3 justify-start p-20'>
			{Icon && <Icon width={80} />}
			<p className='self-center text-xl text-white/70'>{warningText}</p>
		</div>
	);
};

export default Fallback;

import React from 'react';

// component used in WalletButton.tsx
const Account: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
	...props
}) => {
	return (
		<div className='text-indigo-50 text-[16px] rounded-[12px] p-[2px] bg-gradient-to-r '>
			<button
				className='transition-all bg-default-primary px-[12px] py-[10px] rounded-[12px] font-bold hover:bg-hover-primary'
				{...props}>
				<p>{props.children}</p>
			</button>
		</div>
	);
};

export default Account;

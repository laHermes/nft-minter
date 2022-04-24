import React from 'react';

interface IAccount {
	title: string;
}

// component used in WalletButton.tsx
const Account: React.FC<IAccount & React.HTMLAttributes<HTMLButtonElement>> = ({
	title,
	...props
}) => {
	return (
		<div className='text-indigo-50 text-[16px] rounded-[12px] p-[2px] bg-gradient-to-r '>
			<button
				className='bg-default-primary px-[12px] py-[10px] rounded-[12px] font-bold hover:bg-hover-primary'
				{...props}>
				<p>{title}</p>
			</button>
		</div>
	);
};

export default Account;

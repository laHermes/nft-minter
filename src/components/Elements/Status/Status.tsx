import React from 'react';
import clsx from 'clsx';

const variants = {
	red: 'bg-red-900/40 text-red-600',
	green: 'bg-green-900/40 text-green-600',
	blue: 'bg-blue-900/40 text-blue-600',
	teal: 'bg-teal-900/40 text-teal-600',
};

interface IStatus {
	icon?: React.ReactElement | any;
	variant?: keyof typeof variants;
	msg?: any;
}

const Status = ({ msg, icon, variant = 'blue' }: IStatus) => {
	return (
		<div className={clsx('py-2 px-3 rounded-[12px]', variants[variant])}>
			<p className='col-span-4 '>{msg}</p>
		</div>
	);
};

export default Status;

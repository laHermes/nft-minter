import React from 'react';
import clsx from 'clsx';

const variants = {
	red: 'bg-red-900/40 text-red-600',
	green: 'bg-green-900/40 text-green-600',
	blue: 'bg-blue-900/40 text-blue-600',
	teal: 'bg-teal-900/40 text-teal-600',
};

interface IStatus {
	icon?: React.ReactElement;
	variant?: keyof typeof variants;
	msg?: any;
}

const Status = ({ msg, icon, variant = 'blue' }: IStatus) => {
	return (
		<div
			className={clsx(
				'inline-flex gap-2 my-2 py-2 px-3 rounded-[12px]',
				variants[variant]
			)}>
			{icon} <span>{msg}</span>
		</div>
	);
};

export default Status;

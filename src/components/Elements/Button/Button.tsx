import React from 'react';
import clsx from 'clsx';

const variants = {
	primary: 'bg-default-primary text-white hover:bg-hover-primary',
};

const sizes = {
	sm: 'py-2 px-4 text-sm',
	md: 'p-2 text-lg font-bold',
	lg: 'py-3 px-8 text-lg',
};

type IconProps =
	| { startIcon: React.ReactElement; endIcon?: never }
	| { endIcon: React.ReactElement; startIcon?: never }
	| { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			type = 'button',
			className = '',
			variant = 'primary',
			size = 'md',
			isLoading = false,
			startIcon,
			endIcon,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				type={type}
				className={clsx(
					'transition-all flex justify-center items-center rounded-[12px]',
					variants[variant],
					sizes[size],
					className
				)}
				{...props}>
				{!isLoading && startIcon}
				<span className='mx-2'>{children}</span> {!isLoading && endIcon}
			</button>
		);
	}
);

Button.displayName = 'Button';

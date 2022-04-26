import React from 'react';
import clsx from 'clsx';

const variants = {
	primary: 'bg-default-primary text-white hover:bg-hover-primary',
	disconnect:
		'border border-red-500/40 hover:border-red-400/60 text-red-600 hover:text-red-500',
	small: 'inline-flex gap-1 text-white/60 ',
};

const sizes = {
	sm: 'p-3 font-bold text-sm',
	md: 'py-2 px-4 font-bold text-md',
	lg: 'py-3 px-8 font-bold text-lg',
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
					'transition-all flex justify-center items-center rounded-[12px] leading-none ',
					variants[variant],
					sizes[size],
					className
				)}
				{...props}>
				{!isLoading && startIcon}
				<span>{children}</span> {!isLoading && endIcon}
			</button>
		);
	}
);

Button.displayName = 'Button';

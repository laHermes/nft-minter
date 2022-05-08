import React from 'react';
import clsx from 'clsx';

const variants = {
	primary: 'bg-default-primary hover:bg-hover-primary text-md h-full',
	gradientBg:
		'bg-default-primary hover:bg-hover-primary hover:bg-transparent text-md h-full w-full',
	disconnect:
		'font-medium border border-red-500/40 hover:border-red-400/60 text-red-600 hover:text-red-500',
	none: '',
};

const border = {
	default:
		'backdrop-blur-sm text-[16px] rounded-[12px] p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
};

type IconProps =
	| { startIcon: React.ReactElement; endIcon?: never }
	| { endIcon: React.ReactElement; startIcon?: never }
	| { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variants;
	isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			type = 'button',
			className = '',
			variant = 'primary',
			isLoading = false,
			startIcon,
			endIcon,
			children,
			...props
		},
		ref
	) => {
		return (
			<div
				className={clsx(
					border['default'],
					variant !== 'gradientBg' && 'bg-none'
				)}>
				<button
					ref={ref}
					type={type}
					className={clsx(
						'transition-all flex justify-center items-center rounded-[12px] leading-none px-[12px] py-[10px] text-white font-bold h-full w-full',
						variants[variant],
						className
					)}
					{...props}>
					{!isLoading && startIcon}
					<span>{children}</span> {!isLoading && endIcon}
				</button>
			</div>
		);
	}
);

Button.displayName = 'Button';

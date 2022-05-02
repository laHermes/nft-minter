import { Link as RouterLink, LinkProps } from 'react-router-dom';
import clsx from 'clsx';

const variants = {
	primary:
		'bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400',
	secondary: 'bg-pill-grey text-white hover:bg-zinc-200 hover:text-zinc-700',
	headerActive: 'bg-transparent text-white',
	headerDisable: 'bg-transparent text-white/60 hover:text-white',
};

const sizes = {
	sm: 'text-sm font-bold',
	md: 'text-md font-bold',
};

type LinkP = LinkProps & {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
};

export const Link = ({
	className,
	children,
	variant = 'primary',
	size = 'md',
	...props
}: LinkP) => {
	return (
		<RouterLink
			className={clsx(
				'transition-all px-[12px] py-[10px] rounded-[12px] text-center',
				className,
				variants[variant],
				sizes[size]
			)}
			{...props}>
			{children}
		</RouterLink>
	);
};

export default Link;

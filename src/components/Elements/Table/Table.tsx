import React from 'react';
import clsx from 'clsx';

type DivProps = React.FC<React.HTMLAttributes<HTMLDivElement>>;

const Table: DivProps = ({ children }) => {
	return (
		<div className='w-full text-xl font-semibold text-white/80'>{children}</div>
	);
};

const Heading: DivProps = ({ children }) => {
	return <div className='flex flex-row gap-2 py-2'>{children}</div>;
};
const FilterName: DivProps = ({ children }) => {
	return <p className='text-white/30 text-lg'>{children}</p>;
};

const GridWrapper: DivProps = ({ children }) => {
	return (
		<div className='flex flex-col gap-10 justify-start py-10'>{children}</div>
	);
};

const Grid: DivProps = ({ children, className, ...props }) => {
	return (
		<div
			className={clsx(
				'grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full',
				className
			)}
			{...props}>
			{children}
		</div>
	);
};

export { Table, Grid, Heading, FilterName, GridWrapper };

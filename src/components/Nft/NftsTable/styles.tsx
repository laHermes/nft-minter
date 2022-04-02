import { ReactNode } from 'react';

interface IChildren {
	children: ReactNode;
}

const NftTable = ({ children }: IChildren) => {
	return (
		<div className='w-full rounded-xl border border-purple-500/20 bg-purple-900/20 shadow-sm shadow-black/50'>
			{children}
		</div>
	);
};

const Filters = ({ children }: IChildren) => {
	return (
		<div className='flex flex-row gap-2 border-b border-purple-500/20 px-3 py-2'>
			{children}
		</div>
	);
};

const GridWrapper = ({ children }: IChildren) => {
	return (
		<div className='flex flex-col gap-10 justify-start p-10'>{children}</div>
	);
};

const Grid = ({ children }: IChildren) => {
	return <div className='grid md:grid-cols-3 gap-5 w-full'>{children}</div>;
};

NftTable.Filters = Filters;
NftTable.GridWrapper = GridWrapper;
NftTable.Grid = Grid;

export default NftTable;

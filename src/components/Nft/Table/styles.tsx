import { ReactNode } from 'react';

interface IChildren {
	children: ReactNode;
}

const NftTable = ({ children }: IChildren) => {
	return (
		<div className='w-full text-xl font-semibold text-white/80'>{children}</div>
	);
};

const Heading = ({ children }: IChildren) => {
	return <div className='flex flex-row gap-2 py-2'>{children}</div>;
};
const FilterName = ({ children }: IChildren) => {
	return <p className='text-white/30 text-lg'>{children}</p>;
};

const GridWrapper = ({ children }: IChildren) => {
	return (
		<div className='flex flex-col gap-10 justify-start py-10'>{children}</div>
	);
};

const Grid = ({ children }: IChildren) => {
	return <div className='grid md:grid-cols-3 gap-5 w-full'>{children}</div>;
};

NftTable.Heading = Heading;
NftTable.FilterName = FilterName;
NftTable.GridWrapper = GridWrapper;
NftTable.Grid = Grid;

export default NftTable;

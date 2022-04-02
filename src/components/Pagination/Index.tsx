import React from 'react';
import usePagination from '../../hooks/usePagination';
import { INft } from '../../redux/types';
import PaginationNavigation from './PaginationNavigation/PaginationNavigation';

interface IPagination {
	data: any;
	CardComponent: React.FC<INft>;
	title?: string;
	itemsPerPage: number;
	pageLimit: number;
}

const Index = ({
	data,
	CardComponent,
	itemsPerPage,
	pageLimit,
}: IPagination) => {
	const pagination = usePagination({ data, itemsPerPage, pageLimit });
	const { paginatedData } = pagination;

	if (!data.length) {
		throw Error;
	}
	return (
		<>
			<div className='grid md:grid-cols-3 gap-5 w-full'>
				{paginatedData.map((nft: INft) => (
					<CardComponent {...nft} key={nft.id} />
				))}
			</div>
			{!!paginatedData && <PaginationNavigation {...pagination} />}
		</>
	);
};

export default Index;

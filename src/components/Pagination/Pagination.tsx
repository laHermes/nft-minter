import React from 'react';
import usePagination from '../../hooks/usePagination';
import { INft } from '../../redux/types';
import PaginationNavigation from '../PaginationNavigation/PaginationNavigation';

interface IPagination {
	data: any;
	Component: React.FC<INft>;
	title: string;
	itemsPerPage: number;
	pageLimit: number;
}

const Pagination = ({
	data,
	Component,
	itemsPerPage,
	pageLimit,
}: IPagination) => {
	const pagination = usePagination({ data, itemsPerPage, pageLimit });
	const { paginatedData } = pagination;

	return paginatedData ? (
		<>
			<div className='grid md:grid-cols-3 gap-5 w-full'>
				{paginatedData.map((nft: INft) => (
					<Component {...nft} key={nft.id} />
				))}
			</div>
			<PaginationNavigation {...pagination} />
		</>
	) : (
		<p>No Data Found!</p>
	);
};

export default Pagination;

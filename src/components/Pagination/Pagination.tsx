import React from 'react';
import usePagination from '../../hooks/usePagination';
import { INft } from '../../redux/types';

interface IPagination {
	data: any;
	Component: React.FC<INft>;
	title: string;
	itemsLimit: number;
	pageLimit: number;
}

const Pagination = ({
	data,
	Component,
	itemsLimit,
	pageLimit,
}: IPagination) => {
	const {
		paginatedData,
		nextPage,
		previousPage,
		totalPages,
		currentPage,
		paginationGroup,
	} = usePagination(data, itemsLimit, pageLimit);

	return paginatedData ? (
		paginatedData.map((nft: any) => {
			return <Component {...nft} key={nft.id} />;
		})
	) : (
		<p>Data Not Found</p>
	);
};

export default Pagination;

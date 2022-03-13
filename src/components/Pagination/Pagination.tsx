import React from 'react';
import usePagination from '../../hooks/usePagination';
import { INft } from '../../redux/types';
import PaginationNavigation from '../PaginationNavigation/PaginationNavigation';

interface IPagination {
	data: any;
	CardComponent: React.FC<INft>;
	WarningComponent: React.FC;
	title?: string;
	itemsPerPage: number;
	pageLimit: number;
}

const Pagination = ({
	data,
	CardComponent,
	WarningComponent,
	itemsPerPage,
	pageLimit,
}: IPagination) => {
	const pagination = usePagination({ data, itemsPerPage, pageLimit });
	const { paginatedData } = pagination;

	return (
		<>
			<div className='grid md:grid-cols-3 gap-5 w-full'>
				{paginatedData &&
					paginatedData.map((nft: INft) => (
						<CardComponent {...nft} key={nft.id} />
					))}
			</div>
			{!paginatedData?.length && <WarningComponent />}
			{!!paginatedData?.length && <PaginationNavigation {...pagination} />}
		</>
	);
};

export default Pagination;

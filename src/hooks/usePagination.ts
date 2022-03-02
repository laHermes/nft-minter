import { useCallback, useEffect, useState } from 'react';

const usePagination = (data: any[], itemsPerPage: number) => {
	const [paginatedData, setPaginatedData] = useState<any>();

	const [totalPages, setTotalPages] = useState<any>(
		Math.ceil(data.length / itemsPerPage)
	);

	const [currentPage, setCurrentPage] = useState<any>(1);

	useEffect(() => {
		setTotalPages(Math.ceil(data.length / itemsPerPage));
	}, [itemsPerPage, data]);

	useEffect(() => {
		const beginningIndex = (currentPage - 1) * itemsPerPage;
		const endingIndex = beginningIndex + itemsPerPage;
		console.log('custom', data.slice(beginningIndex, endingIndex));

		setTotalPages(Math.ceil(data.length / itemsPerPage));
		setPaginatedData(data.slice(beginningIndex, endingIndex));
	}, [currentPage, itemsPerPage, data]);

	const nextPage = useCallback(() => {
		setCurrentPage((page: number) => Math.min(page + 1, totalPages));
	}, [totalPages]);

	const previousPage = () => {
		setCurrentPage((page: number) => Math.max(page - 1, 1));
	};

	return { nextPage, previousPage, paginatedData, currentPage, totalPages };
};

export default usePagination;

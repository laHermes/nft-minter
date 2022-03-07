import { useCallback, useEffect, useState } from 'react';

const usePagination = (
	data: any[],
	itemsPerPage: number,
	pageLimit: number
) => {
	const [paginatedData, setPaginatedData] = useState<any>();
	const [currentPage, setCurrentPage] = useState<any>(1);
	const [paginationGroup, setPaginationGroup] = useState<Array<any>>([]);

	const [totalPages, setTotalPages] = useState<any>(
		Math.ceil(data.length / itemsPerPage)
	);

	useEffect(() => {
		setTotalPages(Math.ceil(data.length / itemsPerPage));
	}, [itemsPerPage, data]);

	useEffect(() => {
		const beginningIndex = (currentPage - 1) * itemsPerPage;
		const endingIndex = beginningIndex + itemsPerPage;

		const start = Math.floor((currentPage - 1) / pageLimit) + pageLimit;
		const PaginationArray = new Array(pageLimit)
			.fill(null)
			.map((_, id) => start + id + 1);
		setPaginationGroup(PaginationArray);

		setTotalPages(Math.ceil(data.length / itemsPerPage));
		setPaginatedData(data.slice(beginningIndex, endingIndex));
	}, [currentPage, itemsPerPage, data, pageLimit, totalPages]);

	const nextPage = useCallback(() => {
		setCurrentPage((page: number) => Math.min(page + 1, totalPages));
	}, [totalPages]);

	const previousPage = () => {
		setCurrentPage((page: number) => Math.max(page - 1, 1));
	};

	function changePage(event: any) {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	return {
		nextPage,
		previousPage,
		paginatedData,
		currentPage,
		totalPages,
		paginationGroup,
	};
};

export default usePagination;

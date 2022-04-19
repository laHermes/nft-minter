import { useEffect, useState } from 'react';
import { IUsePagination, IPaginated } from '../types';

const usePagination = ({
	data,
	itemsPerPage,
	pageLimit,
}: IUsePagination): IPaginated => {
	const [paginatedData, setPaginatedData] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [paginationGroup, setPaginationGroup] = useState<Array<number>>([]);

	// // calculate total pages
	const [totalPages, setTotalPages] = useState<any>(
		Math.ceil(data!.length / itemsPerPage)
	);

	useEffect(() => {
		setTotalPages(Math.ceil(data?.length / itemsPerPage));
		setCurrentPage(1);
	}, [itemsPerPage, data.length]);

	useEffect(() => {
		// const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		const PaginationArray = new Array(totalPages)
			.fill(null)
			.map((_, id) => id + 1, totalPages);

		setPaginationGroup(PaginationArray);
	}, [data.length, itemsPerPage, pageLimit, currentPage, totalPages]);

	useEffect(() => {
		const beginningIndex = (currentPage - 1) * itemsPerPage;
		const endingIndex = beginningIndex + itemsPerPage;
		setTotalPages(Math.ceil(data?.length / itemsPerPage));
		setPaginatedData(data.slice(beginningIndex, endingIndex));
	}, [currentPage, itemsPerPage, data, pageLimit, totalPages]);

	// every time the user changes page it goes to the top of the screen
	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	}, [currentPage]);

	const nextPage = () =>
		setCurrentPage((page: number) => Math.min(page + 1, totalPages));

	const previousPage = () =>
		setCurrentPage((page: number) => Math.max(page - 1, 1));

	const changePage = (event: any) => {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	};

	return {
		nextPage,
		previousPage,
		changePage,
		paginatedData,
		currentPage,
		totalPages,
		paginationGroup,
	};
};

export default usePagination;

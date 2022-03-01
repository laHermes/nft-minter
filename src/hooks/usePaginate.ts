import React, { useEffect, useState } from 'react';

const usePaginate = ({ data, perPageCount }: any) => {
	const [paginatedData, setPaginatedData] = useState<any>(data);
	const [totalPages, setTotalPages] = useState<any>(0);
	const [currentPage, setCurrentPage] = useState<any>(1);

	useEffect(() => {
		setTotalPages(data.length / perPageCount);
		setPaginatedData(data);
	}, [data, perPageCount]);

	return { paginatedData, currentPage, totalPages };
};

export default usePaginate;

import React from 'react';

const PaginationNavigation = ({
	previousPage,
	changePage,
	currentPage,
	nextPage,
	paginationGroup,
}: any) => {
	return (
		<div className='inline-flex items-center gap-5 text-white'>
			<button
				onClick={previousPage}
				className='w-18 p-2 backdrop-blur-sm bg-inherit border rounded-lg'>
				<span>Previous</span>
			</button>

			{paginationGroup.map((page: number, id: number) => (
				<button
					key={id}
					onClick={changePage}
					className={`${
						currentPage === page && 'border'
					} 'w-18 p-2  rounded-lg`}>
					<span>{page}</span>
				</button>
			))}
			<button
				onClick={nextPage}
				className='w-18 p-2 bg-inherit border rounded-lg'>
				<span>Next</span>
			</button>
		</div>
	);
};

export default PaginationNavigation;

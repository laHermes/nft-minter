import React from 'react';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';

const PaginationNavigation = ({
	previousPage,
	changePage,
	currentPage,
	nextPage,
	paginationGroup,
}: any) => {
	console.log(paginationGroup);
	return (
		<div className='inline-flex items-center gap-5 p-2 border text-lg  border-white w-fit rounded-md text-white'>
			<button
				onClick={previousPage}
				className='backdrop-blur-sm bg-inherit  rounded-lg'>
				<AiOutlineCaretLeft className=' text-red-200 text-2xl' />
			</button>

			{paginationGroup.map((page: number, id: number) => (
				<button
					key={id}
					onClick={changePage}
					className={`h-full px-2 border-x ${
						currentPage === page
							? 'border-white/80'
							: 'border-transparent hover:border-white/30'
					} '`}>
					<span>{page}</span>
				</button>
			))}
			<button onClick={nextPage}>
				<AiOutlineCaretRight className=' text-red-200 text-2xl' />
			</button>
		</div>
	);
};

export default PaginationNavigation;

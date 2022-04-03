import React from 'react';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';

const PaginationNavigation = ({
	previousPage,
	changePage,
	currentPage,
	nextPage,
	paginationGroup,
}: any) => {
	return (
		<nav className='inline-flex items-center gap-5 p-2  text-lg  border-white w-fit rounded-md text-white'>
			<button onClick={previousPage}>
				<AiOutlineCaretLeft className='navigationArrow' />
			</button>

			{paginationGroup.map((page: number, id: number) => (
				<button key={id} onClick={changePage} className='h-full px-2'>
					<span
						className={
							page === currentPage ? 'font-bold border-b border-white/50' : ''
						}>
						{page}
					</span>
				</button>
			))}
			<button onClick={nextPage}>
				<AiOutlineCaretRight className='navigationArrow' />
			</button>
		</nav>
	);
};

export default PaginationNavigation;

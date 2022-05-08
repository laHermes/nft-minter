import React from 'react';
import { Button } from 'components/Elements/Button/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const PageNav = ({
	previousPage,
	changePage,
	currentPage,
	nextPage,
	paginationGroup,
	showNumbered = false,
}: any) => {
	return (
		<div className='inline-flex flex-wrap items-center gap-3 py-2 text-sm md:text-lg border-white w-fit rounded-md text-white'>
			<Button onClick={previousPage} variant='none'>
				<ChevronLeftIcon className='w-6' />
			</Button>

			{!showNumbered && (
				<p className='text-white'>
					{currentPage} of {paginationGroup?.length}
				</p>
			)}

			{showNumbered &&
				paginationGroup?.map((page: number, id: number) => (
					<button key={id} onClick={changePage} className='h-full px-2'>
						<span
							className={
								page === currentPage ? 'font-bold border-b border-white/50' : ''
							}>
							{page}
						</span>
					</button>
				))}

			<Button onClick={nextPage} variant='none'>
				<ChevronRightIcon className='w-6' />
			</Button>
		</div>
	);
};

export default PageNav;

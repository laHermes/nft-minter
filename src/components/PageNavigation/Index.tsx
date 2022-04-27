import React from 'react';
import { PageNavigationWrapper, PreviousPage, NextPage } from './styles';

const Index = ({
	previousPage,
	changePage,
	currentPage,
	nextPage,
	paginationGroup,
}: any) => {
	return (
		<PageNavigationWrapper>
			<PreviousPage onClick={previousPage} />
			{paginationGroup?.map((page: number, id: number) => (
				<button key={id} onClick={changePage} className='h-full px-2'>
					<span
						className={
							page === currentPage ? 'font-bold border-b border-white/50' : ''
						}>
						{page}
					</span>
				</button>
			))}

			<NextPage onClick={nextPage} />
		</PageNavigationWrapper>
	);
};

export default Index;

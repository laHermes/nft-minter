import { Button } from 'components/Elements/Button/Button';
import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { IChildren } from 'types';

const PageNav = ({
	previousPage,
	changePage,
	currentPage,
	nextPage,
	paginationGroup,
}: any) => {
	return (
		<PageNavigationWrapper>
			<Button onClick={previousPage} variant='none'>
				<AiOutlineCaretLeft className='navigationArrow' />
			</Button>
			{/* <PreviousPage onClick={previousPage} /> */}
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

			<Button onClick={nextPage} variant='none'>
				<AiOutlineCaretRight className='navigationArrow' />
			</Button>
			{/* <NextPage onClick={nextPage} /> */}
		</PageNavigationWrapper>
	);
};

export default PageNav;

const PageNavigationWrapper = ({ children }: IChildren) => {
	return (
		<nav className='inline-flex items-center gap-5 p-2  text-lg  border-white w-fit rounded-md text-white'>
			{children}
		</nav>
	);
};
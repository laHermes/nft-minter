import React from 'react';
import FilterContext from 'features/Filter/context/FilterContext';
import PaginationContext from 'features/Paginate/context/PaginationContext';
import Board from './BoardView';
const Index = () => {
	return (
		<FilterContext>
			<PaginationContext>
				<Board />
			</PaginationContext>
		</FilterContext>
	);
};

export default Index;

import React from 'react';
import FilterContext from 'store/FilterContext';
import PaginationContext from 'store/PaginationContext';
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

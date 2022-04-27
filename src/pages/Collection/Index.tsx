import React from 'react';
import FilterContext from 'features/Filter/context/FilterContext';
import PaginationContext from 'features/Paginate/context/PaginationContext';
import Collection from './Collection';

const Index = () => {
	return (
		<FilterContext>
			<PaginationContext>
				<Collection />
			</PaginationContext>
		</FilterContext>
	);
};

export default Index;

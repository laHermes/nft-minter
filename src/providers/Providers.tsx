import React from 'react';

import FilterContext from 'features/Filter/context/FilterContext';
import PaginationContext from 'features/Paginate/context/PaginationContext';

// redux
import { store } from 'redux/store';

// web3
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'services/web3/wallet/utils';
import { Provider } from 'react-redux';

const Providers: React.FC<{}> = ({ children }) => {
	return (
		<Provider store={store}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<FilterContext>
					<PaginationContext>{children} </PaginationContext>
				</FilterContext>
			</Web3ReactProvider>
		</Provider>
	);
};

export default Providers;

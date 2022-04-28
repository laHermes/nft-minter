import React from 'react';

// context
import FilterContext from 'features/Filter/context/FilterContext';
import PaginationContext from 'features/Paginate/context/PaginationContext';

// redux
import { store } from 'redux/store';
import { Provider } from 'react-redux';

// web3
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'services/web3/wallet/utils';

//notifications
import { ToastContainer } from 'react-toastify';
import ConnectLayout from 'features/connect/layout/ConnectLayout';

const Providers: React.FC<{}> = ({ children }) => {
	return (
		<Provider store={store}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<ConnectLayout>
					<FilterContext>
						<ToastContainer limit={3} />
						<PaginationContext>{children} </PaginationContext>
					</FilterContext>
				</ConnectLayout>
			</Web3ReactProvider>
		</Provider>
	);
};

export default Providers;

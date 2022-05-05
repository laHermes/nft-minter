import React from 'react';

// context
import FilterContext from 'features/Filter/context/FilterContext';
import PaginationContext from 'features/Paginate/context/PaginationContext';
import ModalProvider from 'store/ModalContext';

// redux
import { store } from 'redux/store';
import { Provider } from 'react-redux';

// web3
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'services/web3/wallet/utils';

//notifications
import ConnectLayout from 'features/connect/layout/ConnectLayout';
import MintProvider from 'features/mint/context/MintContext';

const Providers: React.FC<{}> = ({ children }) => {
	return (
		<Provider store={store}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<MintProvider>
					<ConnectLayout>
						<FilterContext>
							<ModalProvider>
								<PaginationContext>{children}</PaginationContext>
							</ModalProvider>
						</FilterContext>
					</ConnectLayout>
				</MintProvider>
			</Web3ReactProvider>
		</Provider>
	);
};

export default Providers;

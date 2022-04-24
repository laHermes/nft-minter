import React from 'react';

// routes
import Routes from 'routes/Index';

// redux
import { store } from 'redux/store';

// web3
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './services/web3/wallet/utils';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<Routes />
			</Web3ReactProvider>
		</Provider>
	);
}

export default App;

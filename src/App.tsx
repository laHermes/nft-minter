import React from 'react';
import Routes from './routes/Routing';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './services/web3/wallet/utils';

function App() {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<Routes />
		</Web3ReactProvider>
	);
}

export default App;

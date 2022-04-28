import React from 'react';
import useAutoWalletConnect from '../hooks/useAutoConnect';
import useFetch from '../hooks/useFetch';

const ConnectLayout: React.FC<{}> = ({ children }) => {
	useAutoWalletConnect();
	useFetch();
	return <>{children}</>;
};

export default ConnectLayout;

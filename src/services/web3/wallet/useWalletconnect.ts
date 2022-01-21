import { useCallback, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { setAutoLoginLS } from '../../../utils/localStorage';

const useWalletConnect = () => {
	const { activate, deactivate, account, connector } = useWeb3React();

	const [isPending, setIsPending] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const handleOpen = useCallback(() => {
		setIsError(false);
		setIsPending(true);
	}, []);

	const handleConnect = useCallback(async () => {
		connector && (await activate(connector, undefined, true));
		setAutoLoginLS(true);
	}, [activate, connector]);

	const handleDisconnect = useCallback(() => {
		deactivate();
		setAutoLoginLS(false);
	}, [deactivate]);

	const handleWalletConnectButton = useCallback(() => {
		account ? handleDisconnect() : handleConnect();
	}, [account, handleDisconnect, handleConnect]);

	return { isError, isPending, handleOpen, account, handleWalletConnectButton };
};

export default useWalletConnect;

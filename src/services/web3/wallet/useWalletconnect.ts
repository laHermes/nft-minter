import { useCallback, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { setAutoLoginLS } from '../../../utils/localStorage';
import useAsyncEffect from 'use-async-effect';
import { setSigner } from '../index';
import { Web3Provider } from '@ethersproject/providers';
import { SUPPORTED_WALLETS } from './utils';

const useWalletConnect = () => {
	const { activate, deactivate, account, connector } = useWeb3React();

	const [isPending, setIsPending] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [selectedWallet, setSelectedWallet] = useState<any>();

	const handleOpen = useCallback(() => {
		setIsError(false);
		setIsPending(true);
	}, []);

	const handleConnect = useCallback(
		async (wallet: any) => {
			const { connector } = wallet;
			console.log(wallet);
			connector && (await activate(connector, undefined, true));
			setAutoLoginLS(true);
			setSelectedWallet(wallet);
		},
		[activate, connector]
	);

	const handleDisconnect = useCallback(() => {
		deactivate();
		setAutoLoginLS(false);
	}, [deactivate]);

	const handleWalletConnectButton = useCallback(() => {
		account && handleDisconnect();
	}, [account, handleDisconnect]);

	useAsyncEffect(
		async (isActive) => {
			if (selectedWallet) return;

			if (connector) {
				setSigner(new Web3Provider(await connector.getProvider()).getSigner());
				const wallet = SUPPORTED_WALLETS.find(
					(wallet) => typeof wallet.connector === typeof connector
				);
				if (isActive()) setSelectedWallet(wallet);
			}
		},
		[connector]
	);

	return {
		isError,
		isPending,
		handleOpen,
		account,
		handleWalletConnectButton,
		handleConnect,
	};
};

export default useWalletConnect;

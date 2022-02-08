import { useCallback, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { setAutoLoginLS } from '../../../utils/localStorage';
import useAsyncEffect from 'use-async-effect';
import { setSigner } from '../index';
import { Web3Provider } from '@ethersproject/providers';
import { SUPPORTED_WALLETS } from './utils';

export interface IUseWalletConnect {
	handleConnect: (wallet: any) => void;
	handleDisconnect: () => void;
	handleWalletDisconnectButton: () => void;
	account?: string | null;
	isPending: boolean;
	isError: boolean;
	selectedWallet?: any;
}

const useWalletConnect = (): IUseWalletConnect => {
	const { activate, deactivate, account, connector } = useWeb3React();

	const [isPending, setIsPending] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [selectedWallet, setSelectedWallet] = useState<any>();

	//open Modal
	// const handleOpen = useCallback(() => {
	// 	setIsError(false);
	// 	setIsPending(true);
	// }, []);

	const handleConnect = useCallback(
		async (wallet: any) => {
			const { connector } = wallet;
			if (connector) {
				try {
					await activate(connector);
					setAutoLoginLS(true);
					setSelectedWallet(wallet);
					const signer = new Web3Provider(
						await connector.getProvider()
					).getSigner();

					setSigner(signer);
				} catch (e: any) {
					console.log('Failed Wallet Connection!');
					setIsError(true);
				}
			}
		},
		[activate]
	);

	const handleDisconnect = useCallback(() => {
		deactivate();
		setAutoLoginLS(false);
		setIsError(false);
		setIsPending(false);
	}, [deactivate]);

	const handleWalletDisconnectButton = useCallback(() => {
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
		account,
		handleConnect,
		handleDisconnect,
		handleWalletDisconnectButton,
	};
};

export default useWalletConnect;

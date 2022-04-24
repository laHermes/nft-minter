import { useCallback, useState } from 'react';
import useAsyncEffect from 'use-async-effect';

// web3
import { useWeb3React } from '@web3-react/core';
import { setAutoLoginLS } from 'utils/localStorage';
import { setSigner, writeWeb3 } from '../index';
import { Web3Provider } from '@ethersproject/providers';
import { SUPPORTED_WALLETS, roundBalance, IWalletInfo } from './utils';
import { utils } from 'ethers';

//notifications
import { toast } from 'react-toastify';

export interface IUseWalletConnect {
	handleConnect: (wallet: any) => void;
	handleDisconnect: () => void;
	handleWalletDisconnectButton: () => void;
	account?: string | null;
	balance?: string | null;
	isPending: boolean;
	isError: boolean;
	chainId?: number | undefined;
	selectedWallet?: any;
}
const useWalletConnect = (): IUseWalletConnect => {
	const web3React = useWeb3React();

	const { activate, deactivate, account, connector, library } = web3React;

	const [isPending, setIsPending] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [selectedWallet, setSelectedWallet] = useState<any>();
	const [balance, setBalance] = useState<string>();

	const handleConnect = useCallback(
		async (wallet: IWalletInfo) => {
			const { connector } = wallet;
			if (connector) {
				setIsPending(true);

				try {
					await activate(connector, undefined, true);

					const signer = new Web3Provider(
						await connector.getProvider()
					).getSigner();

					//check chain id to throw error
					const chainId = await signer.getChainId();
					if (chainId !== 80001) {
						toast.error('Please select Mumbai network');
					}

					setSigner(signer);
					setAutoLoginLS(true);
					setSelectedWallet(wallet);
					setIsPending(false);
				} catch (e: any) {
					console.log('Failed connecting to the Wallet!');
					setIsError(true);
					setIsPending(false);
					toast.error('Error connecting to the wallet!');
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

	useAsyncEffect(async (isActive) => {
		if (selectedWallet) return;
		if (connector) {
			const signer = new Web3Provider(
				await connector.getProvider()
			).getSigner();
			setSigner(signer);

			const wallet = SUPPORTED_WALLETS.find(
				(wallet) => typeof wallet.connector === typeof connector
			);

			if (isActive()) setSelectedWallet(wallet);
		}
	}, []);

	useAsyncEffect(async () => {
		if (!account || !library) return;
		setBalance(
			roundBalance(utils.formatEther(await writeWeb3.signer.getBalance()))
		);
		library.on('block', async () => {
			setBalance(
				roundBalance(utils.formatEther(await writeWeb3.signer.getBalance()))
			);
		});

		return () => library.removeListeners('block');
	}, [account, writeWeb3]);

	return {
		...web3React,
		isError,
		isPending,
		balance,
		handleConnect,
		handleDisconnect,
		handleWalletDisconnectButton,
	};
};

export default useWalletConnect;

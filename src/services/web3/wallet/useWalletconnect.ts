import { useCallback, useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { useWeb3React } from '@web3-react/core';
import { setAutoLoginLS } from '../../../utils/localStorage';
import { setSigner, writeWeb3 } from '../index';
import { Web3Provider } from '@ethersproject/providers';
import { SUPPORTED_WALLETS, roundBalance, IWalletInfo } from './utils';
import { utils } from 'ethers';

export interface IUseWalletConnect {
	handleConnect: (wallet: any) => void;
	handleDisconnect: () => void;
	handleWalletDisconnectButton: () => void;
	account?: string | null;
	balance?: string | null;
	isPending: boolean;
	isError: boolean;
	selectedWallet?: any;
}

const useWalletConnect = (): IUseWalletConnect => {
	const { activate, deactivate, account, connector } = useWeb3React();

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
					await activate(connector);

					const signer = new Web3Provider(
						await connector.getProvider()
					).getSigner();

					setSigner(signer);

					setAutoLoginLS(true);
					setSelectedWallet(wallet);
					setIsPending(false);
				} catch (e: any) {
					console.log('Failed Wallet Connection!');
					setIsError(true);
					setIsPending(false);
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
				const signer = new Web3Provider(
					await connector.getProvider()
				).getSigner();
				setSigner(signer);

				const wallet = SUPPORTED_WALLETS.find(
					(wallet) => typeof wallet.connector === typeof connector
				);
				if (isActive()) setSelectedWallet(wallet);
			}
		},
		[connector]
	);

	useAsyncEffect(async () => {
		if (!writeWeb3.signer) return;
		try {
			const balance = utils.formatEther(await writeWeb3.signer.getBalance());
			setBalance(roundBalance(balance));
		} catch (err) {
			console.log('Failed fetching balance!');
		}
	}, [account, writeWeb3]);

	return {
		isError,
		isPending,
		account,
		balance,
		handleConnect,
		handleDisconnect,
		handleWalletDisconnectButton,
	};
};

export default useWalletConnect;

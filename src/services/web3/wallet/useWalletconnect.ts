import { useCallback, useState } from 'react';
import useAsyncEffect from 'use-async-effect';
// blockchain
import { getWeb3ReactContext, useWeb3React } from '@web3-react/core';
import { setAutoLoginLS } from '../../../utils/localStorage';
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
				try {
					setIsPending(true);
					await activate(connector);

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
					console.log('Failed Wallet Connection!');
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
		[connector, account]
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

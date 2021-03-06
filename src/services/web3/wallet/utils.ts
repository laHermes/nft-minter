import { Web3Provider } from '@ethersproject/providers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { injected } from './connectors';

export interface IWalletInfo {
	connector: AbstractConnector;
	name: string;
	icon?: string;
	mobile?: boolean;
}

export const getLibrary = (provider: any): Web3Provider => {
	const library = new Web3Provider(
		provider,
		typeof provider.chainId === 'string'
			? parseInt(provider.chainId)
			: typeof provider.chainId === 'number'
			? provider.chainId
			: 'any'
	);
	library.pollingInterval = 15000;
	return library;
};

export const SUPPORTED_WALLETS: IWalletInfo[] = [
	{
		connector: injected,
		name: 'MetaMask',
		mobile: true,
	},
];

export const roundBalance = (
	balance: string | number,
	roundingPrecision: number = 2
): string => {
	return (+balance).toFixed(roundingPrecision);
};

import { Web3Provider } from '@ethersproject/providers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { injected } from './connectors';

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

interface IWalletInfo {
	connector: AbstractConnector;
	name: string;
	icon?: string;
	mobile?: boolean;
}
export const SUPPORTED_WALLETS: IWalletInfo[] = [
	{
		connector: injected,
		name: 'MetaMask',
		mobile: true,
	},
];

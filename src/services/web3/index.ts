import { Web3Provider } from '@ethersproject/providers';
import { providers } from 'ethers';
import { EthNetworks } from './types';
import { createUrl } from './wallet/connectors';

export type TProviders = providers.BaseProvider | providers.WebSocketProvider;

export const getProvider = (
	network: EthNetworks = EthNetworks.Mumbai
): TProviders => {
	// if (process.env.REACT_APP_MUMBAI) {
	// 	return new providers.WebSocketProvider(createUrl(network, true));
	// }
	return new providers.BaseProvider(createUrl(network));
};

export const writeWeb3 = {
	signer: (window as any).ethereum
		? new Web3Provider((window as any).ethereum).getSigner()
		: new providers.WebSocketProvider(
				createUrl(EthNetworks.Mumbai, true)
		  ).getSigner(),
};

export const setProvider = (provider: TProviders) => {
	web3.provider = provider;
};

export const setSigner = (signer: providers.JsonRpcSigner) => {
	writeWeb3.signer = signer;
};

export const web3 = {
	provider: getProvider(),
};

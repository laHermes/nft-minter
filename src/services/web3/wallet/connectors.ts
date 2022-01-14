import { InjectedConnector } from '@web3-react/injected-connector';
import { EthNetworks } from '../types';

// some wallets need url, metamask doesn't
export const createUrl = (
	network: EthNetworks,
	wss: boolean = false
): string => {
	const id = process.env.REACT_APP_ALCHEMY_MUMBAI as string;
	return `${wss ? 'wss' : 'https'}://polygon-mumbai.g.alchemy.com/v2/${id}`;

	// can support additional networks if needed
	// const net = network === EthNetworks.Mumbai ? 'polygon-mumbai' : '';
	// const id =
	// 	network === EthNetworks.Mumbai
	// 		? (process.env.REACT_APP_ALCHEMY_MUMBAI as string)
	// 		: '';
	// if (id === '') return;
};

const RPC_URL: { [chainId: number]: string } = {
	80001: createUrl(EthNetworks.Mumbai),
};

export const injected = new InjectedConnector({
	supportedChainIds: [80001],
});

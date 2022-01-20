import { Web3Provider } from '@ethersproject/providers';
import { create } from 'domain';
import { providers } from 'ethers';
import { EthNetworks } from './types';
import { createUrl } from './wallet/connectors';

export const getProvider = (
	network: EthNetworks = EthNetworks.Mumbai
): providers.BaseProvider | providers.WebSocketProvider => {
	if (process.env.REACT_APP_MUMBAI) {
		return new providers.WebSocketProvider(createUrl(network, true));
	}
	return new providers.BaseProvider(createUrl(network));
};

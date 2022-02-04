import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Web3Provider } from '@ethersproject/providers';

import { providers } from 'ethers';
import { EthNetworks } from '../../services/web3/types';
import { createUrl } from '../../services/web3/wallet/connectors';

export type TProviders = providers.BaseProvider | providers.WebSocketProvider;

export interface IWeb3State {
	provider: TProviders | undefined;
	signer: providers.JsonRpcSigner | undefined;
}

export const initialState: IWeb3State = {
	provider: undefined,
	signer: undefined,
};

const web3Slice = createSlice({
	name: 'web3',
	initialState,
	reducers: {
		writeWeb3: (state) => {
			const signer = (window as any).ethereum
				? new Web3Provider((window as any).ethereum).getSigner()
				: new providers.WebSocketProvider(
						createUrl(EthNetworks.Mumbai, true)
				  ).getSigner();

			state.signer = signer;
		},
		setSigner: (state, action: PayloadAction<providers.JsonRpcSigner>) => {
			state.signer = action.payload;
		},
		setProvider: (state, action: PayloadAction<TProviders>) => {
			state.provider = action.payload;
		},
		defineProvider: (state) => {
			const key = process.env.REACT_APP_MUMBAI as string;
			state.provider = new providers.AlchemyProvider(EthNetworks.Mumbai, key);
		},
	},
});

export const { writeWeb3, setSigner, setProvider, defineProvider } =
	web3Slice.actions;
export const web3 = web3Slice.reducer;

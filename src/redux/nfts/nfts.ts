import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

// blockchain
import { Contract, Provider } from 'ethcall';
import { Contracts } from '../../contracts/ContractExports';

import { getProvider } from '../../services/web3';
import { BigNumberish } from 'ethers';

//types and utils
import { OwnersType, INfts, INft, IDataFormat } from '../types';
import { dataFormat } from '../utils';

//fetch
import axios from 'axios';

// provider def
const ethcallProvider = new Provider();
ethcallProvider.init(getProvider());

//nft contract address

//contract
const contract = new Contract(Contracts.nft.address, Contracts.nft.abi);

export const initialState: INfts = {
	nftData: [],
	nftStats: null,
	statusMetadata: null,
	statusBlockchain: null,
};

export const getAllNfts = createAsyncThunk('nfts/getAllNfts', async () => {
	const ethcallProvider = new Provider();
	ethcallProvider.init(getProvider());

	const nftContract = new Contract(Contracts.nft.address, Contracts.nft.abi);
	const marketContract = new Contract(
		Contracts.market.address,
		Contracts.market.abi
	);

	const data = await marketContract.getAllNfts();

	const items = data.map((token: any) => {
		console.log(token);
	});
});

// pull data from IPFS
export const getNftMetadata = createAsyncThunk(
	'nfts/getNftMetadata',
	async (_, { dispatch }) => {
		return fetch(
			'https://gateway.pinata.cloud/ipfs/QmcFjr88DxvT73xBGEUpjQopfircdjjfw8tneas4HdKPpB/_metadata.json'
		).then(async (res) => {
			const results = await res.json();
			dispatch(getNftInfo());
			dispatch(getNftOwners(results));

			return results;
		});
	}
);

//TODO: Combine NFT info with blockchain calls

// pull data from Blockchain
export const getNftInfo = createAsyncThunk('nfts/getNftInfo', async () => {
	const info: BigNumberish[] = await ethcallProvider.all([
		contract.MAX_TOKENS_AMOUNT(),
		contract.TOKEN_PRICE(),
		contract.totalSupply(),
		contract.openSale(),
		contract.name(),
	]);
	return dataFormat(info);
});

// pull data from Blockchain
export const getNftOwners = createAsyncThunk(
	'nfts/getNftOwners',
	async (nftMeta: INft[]) => {
		const tokenOwners = nftMeta.map((instance) => {
			return contract.ownerOf(instance.edition - 1);
		});

		// second multicall
		// returns either owner's address or null
		const tokenIdToOwner: OwnersType[] = await ethcallProvider.tryAll(
			tokenOwners
		);
		return tokenIdToOwner;
	}
);

// TODO: HANDLE SUCCESS CASES

const nftsSlice = createSlice({
	name: 'nfts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//// METADATA
		builder.addCase(getNftMetadata.pending, (state: INfts) => {
			state.statusMetadata = 'loading';
		});

		builder.addCase(getNftMetadata.rejected, (state: INfts) => {
			state.statusMetadata = 'failed';
		});

		builder.addCase(
			getNftMetadata.fulfilled,
			(state: INfts, action: PayloadAction<[]>) => {
				state.nftData = action.payload;
				state.statusMetadata = 'success';
			}
		);

		////INFO
		builder.addCase(getNftInfo.pending, (state: INfts) => {
			state.statusBlockchain = 'loading';
		});

		builder.addCase(getNftInfo.rejected, (state: INfts) => {
			state.statusBlockchain = 'failed';
		});

		builder.addCase(
			getNftInfo.fulfilled,
			(state: INfts, action: PayloadAction<IDataFormat>) => {
				state.nftStats = action.payload;
				state.statusBlockchain = 'success';
			}
		);

		//// OWNERS
		builder.addCase(getNftOwners.pending, (state: INfts) => {
			state.statusBlockchain = 'loading';
		});

		builder.addCase(getNftOwners.rejected, (state: INfts) => {
			state.statusBlockchain = 'failed';
		});

		builder.addCase(
			getNftOwners.fulfilled,
			(state: INfts, action: PayloadAction<any>) => {
				const NftsAndOwnersMerged = state.nftData.map((instance) => {
					return {
						...instance,
						ownersAddress: action.payload[instance.edition - 1],
					};
				});

				state.nftData = NftsAndOwnersMerged;
				state.statusBlockchain = 'success';
			}
		);
	},
});

export const nfts = nftsSlice.reducer;
export const nftState = (state: RootState) => state.nfts;
export const onlyOwned = (state: RootState) =>
	state.nfts.nftData.filter((instance) => instance.ownersAddress && instance);

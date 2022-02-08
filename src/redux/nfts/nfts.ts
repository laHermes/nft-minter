import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../index';
import { Contract, Provider } from 'ethcall';
import Collection from '../../contracts/Collection.json';
import { getProvider } from '../../services/web3';
import { BigNumberish } from 'ethers';
import {
	OwnersType,
	IGetOnChainNftData,
	INfts,
	INft,
	IDataFormat,
} from '../types';
import { dataFormat } from '../utils';
import { isFulfilled } from '@reduxjs/toolkit';

// provider def
const ethcallProvider = new Provider();
ethcallProvider.init(getProvider());

//nft contract address
const NFT_ADDRESS = '0xd1B1193A591139CB46f3B55a341a92F4C6791B31';

//contract
const contract = new Contract(NFT_ADDRESS, Collection.abi);

export const initialState: INfts = {
	nfts: [],
	nftStats: null,
	owners: [],
	status: null,
};

// pull data from IPFS
export const getNftMetadata = createAsyncThunk(
	'nfts/getNftMetadata',
	async () => {
		return fetch(
			'https://gateway.pinata.cloud/ipfs/QmcFjr88DxvT73xBGEUpjQopfircdjjfw8tneas4HdKPpB/_metadata.json'
		).then((res) => res.json());
	}
);

// // pull data from Blockchain
// export const getOnChainNftData = createAsyncThunk(
// 	'nfts/getOnChainNftData',
// 	async () => {
// 		//eth call: get basic token info
// 		const data: BigNumberish[] = await ethcallProvider.all([
// 			contract.MAX_TOKENS_AMOUNT(),
// 			contract.TOKEN_PRICE(),
// 			contract.totalSupply(),
// 			contract.openSale(),
// 			contract.name(),
// 		]);

// 		const tokenOwners = [];
// 		const onChainInfo = dataFormat(data);

// 		// nftMetadata.map()

// 		// iterate max mintable tokens to fetch owner
// 		for (let i = 0; i < onChainInfo.maxMintableTokens; i++) {
// 			tokenOwners.push(contract.ownerOf(i));
// 		}

// 		// second multicall
// 		//returns either owner's address or null
// 		const tokenIdToOwner: OwnersType[] = await ethcallProvider.tryAll(
// 			tokenOwners
// 		);

// 		return { info: onChainInfo, owners: tokenIdToOwner };
// 	}
// );

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
			state.status = 'loading';
		});

		builder.addCase(getNftMetadata.rejected, (state: INfts) => {
			state.status = 'failed';
		});

		builder.addCase(
			getNftMetadata.fulfilled,
			(state: INfts, action: PayloadAction<[]>) => {
				state.nfts = action.payload;
				state.status = 'success';
			}
		);

		////INFO
		builder.addCase(getNftInfo.pending, (state: INfts) => {
			state.status = 'loading';
		});

		builder.addCase(getNftInfo.rejected, (state: INfts) => {
			state.status = 'failed';
		});

		builder.addCase(
			getNftInfo.fulfilled,
			(state: INfts, action: PayloadAction<IDataFormat>) => {
				state.nftStats = action.payload;
			}
		);

		//// OWNERS
		builder.addCase(getNftOwners.pending, (state: INfts) => {
			state.status = 'loading';
		});

		builder.addCase(getNftOwners.rejected, (state: INfts) => {
			state.status = 'failed';
		});

		builder.addCase(
			getNftOwners.fulfilled,
			(state: INfts, action: PayloadAction<any>) => {
				console.log(action.payload);
			}
		);
	},
});

export const nfts = nftsSlice.reducer;
export const nftState = (state: RootState) => state.nfts;

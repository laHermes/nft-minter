import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Contract, Provider } from 'ethcall';
import Collection from '../../contracts/Collection.json';
import { store } from '../../redux/index';
import { getProvider } from '../../services/web3';
import { BigNumberish, utils } from 'ethers';

type OwnersType = null | string;

interface IDataFormat {
	tokenPrice: string;
	maxMintableTokens: number;
	totalSupply: string;
	saleStatus: boolean;
	nftName: string;
}

interface INft {
	name: string;
	description: string;
	image: string;
	dna: string;
	edition: number;
	date: number;
	attributes: [{ trait_type: string; value: string }];
	compiler?: string;
}

interface IGetOnChainNftData {
	info: IDataFormat;
	owners: OwnersType[];
}

interface INfts {
	nfts: [INft] | [];
	nftStats: IGetOnChainNftData | null;
	owners: OwnersType[];
	status: any;
}

const NFT_ADDRESS = '0xd1B1193A591139CB46f3B55a341a92F4C6791B31';

// provider def
const ethcallProvider = new Provider();
ethcallProvider.init(getProvider());

//contract
const contract = new Contract(NFT_ADDRESS, Collection.abi);

const maxTokensReq = contract.MAX_TOKENS_AMOUNT();
const tokenPriceReq = contract.TOKEN_PRICE();
const totalSupplyReq = contract.totalSupply();
const saleStatusReq = contract.openSale();
const nameReq = contract.name();

export const initialState: INfts = {
	nfts: [],
	nftStats: null,
	owners: [],
	status: null,
};

export const getNftMetadata = createAsyncThunk(
	'nfts/getNftMetadata',
	async () => {
		return fetch(
			'https://gateway.pinata.cloud/ipfs/QmcFjr88DxvT73xBGEUpjQopfircdjjfw8tneas4HdKPpB/_metadata.json'
		).then((res) => res.json());
	}
);

export const getOnChainNftData = createAsyncThunk(
	'nfts/getOnChainNftData',
	async () => {
		//eth call
		const data: BigNumberish[] = await ethcallProvider.all([
			maxTokensReq,
			tokenPriceReq,
			totalSupplyReq,
			saleStatusReq,
			nameReq,
		]);

		const tokenOwners = [];
		const formated = dataFormat(data);

		// iterate max mintable tokens to fetch owner
		for (let i = 0; i < formated.maxMintableTokens; i++) {
			tokenOwners.push(contract.ownerOf(i));
		}

		// second multicall
		//returns either owner's address or null
		const dataSec: OwnersType[] = await ethcallProvider.tryAll(tokenOwners);

		return { info: formated, owners: dataSec };
	}
);
export const getNftOwners = createAsyncThunk(
	'nfts/getNftOwners',
	async (data: IDataFormat) => {
		const tokenOwners = [];

		// iterate max mintable tokens to fetch owner
		for (let i = 0; i < data.maxMintableTokens; i++) {
			tokenOwners.push(contract.ownerOf(i));
		}

		// second multicall
		//returns either owner's address or null
		const dataSec: OwnersType[] = await ethcallProvider.tryAll(tokenOwners);
		return dataSec;
	}
);

// TODO: HANDLE SUCCESS CASES

const nftsSlice = createSlice({
	name: 'nfts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
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
		builder.addCase(getOnChainNftData.pending, (state: INfts) => {
			state.status = 'loading';
		});

		builder.addCase(getOnChainNftData.rejected, (state: INfts) => {
			state.status = 'failed';
		});

		builder.addCase(
			getOnChainNftData.fulfilled,
			(state: INfts, action: PayloadAction<IGetOnChainNftData>) => {
				state.nftStats = action.payload;
				state.status = 'success';
			}
		);
	},
});

export const nfts = nftsSlice.reducer;
export const nftState = (state: RootState) => state.nfts;

const dataFormat = (
	data: BigNumberish[],
	granularity: number = 0
): IDataFormat => {
	return {
		tokenPrice: utils.formatEther(data[1]),
		maxMintableTokens: parseInt(utils.formatUnits(data[0], granularity)),
		totalSupply: utils.formatUnits(data[2], granularity),
		saleStatus: !!data[3],
		nftName: data[4].toString(),
	};
};

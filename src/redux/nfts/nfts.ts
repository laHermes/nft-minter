import {
	createSlice,
	createAsyncThunk,
	PayloadAction,
	createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../index';

import { fetchAllNfts } from '../../services/web3/utils';

//types and utils
import { INfts, INft } from '../types';

export const initialState: INfts = {
	nfts: [],
	status: null,
};

// // pull data from NFT
// export const getNfts = createAsyncThunk(
// 	'nfts/getNfts',
// 	async (_, { dispatch }) => {

// 		return fetch(
// 			'https://gateway.pinata.cloud/ipfs/QmcFjr88DxvT73xBGEUpjQopfircdjjfw8tneas4HdKPpB/_metadata.json'
// 		).then(async (res) => {
// 			const results = await res.json();
// 			dispatch(getNftInfo());
// 			dispatch(getNftOwners(results));

// 			return results;
// 		});
// 	}
// );

// pull data from Blockchain
export const getNfts = createAsyncThunk('nfts/getNfts', async () => {
	return await fetchAllNfts();
});

const nftsSlice = createSlice({
	name: 'nfts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNfts.pending, (state: INfts) => {
			state.status = 'loading';
		});

		builder.addCase(getNfts.rejected, (state: INfts) => {
			state.status = 'failed';
		});

		builder.addCase(
			getNfts.fulfilled,
			(state: INfts, action: PayloadAction<INft[]>) => {
				console.log(action.payload);

				state.nfts = action.payload;
				state.status = 'success';
			}
		);
	},
});

export const nfts = nftsSlice.reducer;
export const nftState = (state: RootState) => state.nfts;

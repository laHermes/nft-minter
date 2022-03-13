import {
	createSlice,
	createSelector,
	createAsyncThunk,
	PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../index';

import { fetchAllNfts } from '../../services/web3/utils';

//types and utils
import { INfts, INft } from '../types';

export const initialState: INfts = {
	nfts: [],
	status: null,
};

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
				state.nfts = action.payload;
				state.status = 'success';
			}
		);
	},
});

export const nfts = nftsSlice.reducer;
export const selectNfts = (state: RootState) => state.nfts;
export const selectUniqueColors = createSelector(
	(state: RootState) => state.nfts.nfts,
	(nfts) =>
		Array.from(
			new Set(nfts.map((nft: INft) => nft.metadata.attributes[0].value))
		)
);

// (state: RootState) =>

// {
// 	Array.from(
// 		new Set(
// 			state.nfts.nfts.map((nft: INft) => nft.metadata.attributes[0].value)
// 		)
// 	);
// };

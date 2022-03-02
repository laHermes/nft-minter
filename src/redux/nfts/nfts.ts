import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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
export const nftState = (state: RootState) => state.nfts;

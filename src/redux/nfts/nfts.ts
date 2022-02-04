import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface INft {
	name: string;
	description: string;
	image: string;
	dna: string;
	edition: string;
	date: number;
	attributes: [{ trait_type: string; value: string }];
	compiler?: string;
}

interface INfts {
	nfts: [INft] | [];
	status: any;
}

export const initialState: INfts = {
	nfts: [],
	status: null,
};

export const getNfts = createAsyncThunk('nfts/getNfts', async () => {
	return fetch(
		'https://gateway.pinata.cloud/ipfs/QmcFjr88DxvT73xBGEUpjQopfircdjjfw8tneas4HdKPpB/_metadata.json'
	).then((res) => res.json());
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
			(state: INfts, action: PayloadAction<[]>) => {
				state.nfts = action.payload;
				state.status = 'success';
			}
		);
	},
});

export const nfts = nftsSlice.reducer;
export const nftState = (state: RootState) => state.nfts;

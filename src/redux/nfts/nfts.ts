import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface INfts {
	nfts: [];
	status: any;
}

const initialState: INfts = {
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

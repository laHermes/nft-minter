import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { IMinterCountState } from '../types';

const initialState: IMinterCountState = {
	count: 1,
};

const mintCountSlice = createSlice({
	name: 'mintCount',
	initialState,
	reducers: {
		increase: (state) => {
			if (state.count++ > 10) return;
			state.count++;
		},
		decrease: (state) => {
			if (state.count-- < 1) return;
			state.count--;
		},
	},
});

export const mintCount = mintCountSlice.reducer;
export const getMintCount = (state: RootState) => state.mintCount.count;

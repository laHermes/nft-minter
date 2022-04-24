import { configureStore } from '@reduxjs/toolkit';
import { nfts } from './nfts/nfts';

export const store = configureStore({
	reducer: {
		nfts,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

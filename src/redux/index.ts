import { configureStore } from '@reduxjs/toolkit';
import { user } from './user/user';
import { web3 } from './web3/web3';
import { nfts } from './nfts/nfts';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [],
			},
		}),
	reducer: {
		user,
		web3,
		nfts,
	},
});

export type RootState = ReturnType<typeof store.getState>;

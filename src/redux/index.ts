import { configureStore } from '@reduxjs/toolkit';
import { user } from './user/user';
import { web3 } from './web3/web3';
import { nfts } from './nfts/nfts';
import { mintCount } from './minterCount/minterCount';
import { notification } from './notification/notification';
export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [],
			},
		}),
	reducer: {
		nfts,
		user,
		web3,
		notification,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

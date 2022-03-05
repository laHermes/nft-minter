import { configureStore } from '@reduxjs/toolkit';
import { nfts } from './nfts/nfts';
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
		notification,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { user } from './user/user';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [],
			},
		}),
	reducers: {
		user,
	},
});

export type RootState = ReturnType<typeof store.getState>;

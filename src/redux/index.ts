import { configureStore } from '@reduxjs/toolkit';
import { user } from './user/user';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [],
			},
		}),
	reducer: {
		user,
	},
});

export type RootState = ReturnType<typeof store.getState>;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setDarkModeLS } from '../../utils/localStorage';

export interface IUserState {
	darkMode: boolean;
}

export const initialState: IUserState = {
	darkMode: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setDarkMode: (state, action: PayloadAction<boolean>) => {
			state.darkMode = action.payload;
			const root = window.document.documentElement;
			if (action.payload) root.classList.add('dark');
			else root.classList.remove('dark');
			setDarkModeLS(action.payload);
		},
	},
});

export const { setDarkMode } = userSlice.actions;
export const user = userSlice.reducer;

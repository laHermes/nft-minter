import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export enum NotificationType {
	success,
	error,
	pending,
	info,
}

export interface Notification {
	id: string;
	type?: NotificationType;
	title: string;
	msg: string;
}

export interface INotifications {
	notifications: any[];
}

export const initialState = {
	notifications: [] as any,
};

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		addNotification: (state, action: PayloadAction<string>) => {
			const toastId = toast(action.payload, { type: 'error' });
			state.notifications = [...state.notifications, toastId];
		},
	},
});

export const { addNotification } = notificationSlice.actions;

export const notification = notificationSlice.reducer;

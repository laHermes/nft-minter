import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export enum NotificationType {
	success,
	error,
	pending,
}

export interface Notification {
	id: string;
	type?: NotificationType;
	title: string;
	msg: string;
}

export interface INotifications {
	notifications: Notification[];
}

export const initialState: INotifications = {
	notifications: [],
};

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		addNotification: (state, action: PayloadAction<any>) => {
			const length = state.notifications.unshift({
				id: nanoid(),
				type: NotificationType.pending,
				title: 'Notification added',
				msg: 'helloo',
			});
			if (length > 50) {
				state.notifications.pop();
			}
		},
		removeNotification: (state, action: PayloadAction<any>) => {
			const index = state.notifications.findIndex(
				(notification) => (notification.id = action.payload.id)
			);

			if (index > -1) state.notifications.splice(index, 1);
		},
	},
});

export const { addNotification, removeNotification } =
	notificationSlice.actions;

export const notification = notificationSlice.reducer;

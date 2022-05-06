import React, { useContext, createContext } from 'react';
import useMinter from '../hooks/useMinter';
import {
	StatusError,
	StatusSubmitted,
	StatusSuccess,
} from '../components/Statuses';

enum STATES {
	IDLE = 'IDLE',
	SUBMITTED = 'SUBMITTED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
}

interface IStatus {
	status: STATES;
	msg?: any;
}

const STATUS_COMPONENT = {
	[STATES.IDLE]: null,
	[STATES.SUBMITTED]: StatusSubmitted,
	[STATES.SUCCESS]: StatusSuccess,
	[STATES.ERROR]: StatusError,
};

type MintContextType = {
	count: number;
	status: IStatus;
	transaction: any;
	error: boolean;
	increment: () => void;
	decrement: () => void;
	mint: () => void;
	resetState: () => void;
	renderStatusComponent?: any;
};

export const MintContext = createContext<Partial<MintContextType>>({});
export const useMintContext = () => useContext(MintContext);

const MintProvider: React.FC<{}> = ({ children }) => {
	const { count, increment, decrement, mint, status, transaction, resetState } =
		useMinter();

	const renderStatusComponent = () => {
		const Component = STATUS_COMPONENT[status.status];
		if (!Component) return null;

		return <Component {...status} />;
	};

	return (
		<MintContext.Provider
			value={{
				count,
				increment,
				decrement,
				mint,
				status,
				transaction,
				renderStatusComponent,
				resetState,
			}}>
			{children}
		</MintContext.Provider>
	);
};

export default MintProvider;

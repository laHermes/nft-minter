import React, { useContext, createContext } from 'react';
import useMinter from '../hooks/useMinter';

enum states {
	IDLE = 'IDLE',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
}

interface IStatus {
	status: states;
	msg?: any;
}

type MintContextType = {
	count: number;
	status: IStatus;
	transaction: any;
	error: boolean;
	increment: () => void;
	decrement: () => void;
	mint: () => void;
};

export const MintContext = createContext<Partial<MintContextType>>({});
export const useMintContext = () => useContext(MintContext);

const MintProvider: React.FC<{}> = ({ children }) => {
	const { count, increment, decrement, mint, status, transaction } =
		useMinter();

	return (
		<MintContext.Provider
			value={{ count, increment, decrement, mint, status, transaction }}>
			{children}
		</MintContext.Provider>
	);
};

export default MintProvider;

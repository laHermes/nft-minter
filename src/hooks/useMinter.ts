import { useState, useCallback } from 'react';
import { mintToken } from '../services/web3/utils';

const UPPER_BOUND = 10;
const LOWER_BOUND = 1;

const useMinter = () => {
	const [count, setCount] = useState<number>(1);

	const increment = useCallback(() => {
		setCount((state: number) => (state + 1 <= UPPER_BOUND ? state + 1 : state));
	}, []);

	const decrement = useCallback(() => {
		setCount((state: number) => (state - 1 >= LOWER_BOUND ? state - 1 : state));
	}, []);

	const mint = () => {
		mintToken(3);
	};

	return { count, increment, decrement, setCount, mint };
};

export default useMinter;

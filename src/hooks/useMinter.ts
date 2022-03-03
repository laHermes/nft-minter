import { useState, useCallback } from 'react';
import { mintToken } from '../services/web3/utils';
import useWalletConnect from '../services/web3/wallet/useWalletConnect';

const UPPER_BOUND = 10;
const LOWER_BOUND = 1;

const useMinter = () => {
	const [count, setCount] = useState<number>(1);
	const { account } = useWalletConnect();

	const increment = useCallback(() => {
		setCount((count: number) => Math.min(count + 1, UPPER_BOUND));
	}, []);

	const decrement = useCallback(() => {
		setCount((count: number) => Math.max(count - 1, LOWER_BOUND));
	}, []);

	const mint = () => {
		if (!account) return;

		mintToken(count);
	};

	return { count, increment, decrement, setCount, mint };
};

export default useMinter;

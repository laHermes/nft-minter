import React, { useState, useCallback } from 'react';

const UPPER_BOUND = 10;
const LOWER_BOUND = 0;

const useMinter = () => {
	const [count, setCount] = useState<number>(0);

	const increment = useCallback(() => {
		setCount((state: number) => (state + 1 <= UPPER_BOUND ? state + 1 : state));
	}, []);

	const decrement = useCallback(() => {
		setCount((state: number) => (state - 1 >= LOWER_BOUND ? state - 1 : state));
	}, []);

	return { count, increment, decrement, setCount };
};

export default useMinter;

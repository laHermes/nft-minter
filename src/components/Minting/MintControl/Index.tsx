import React from 'react';
import useMinter from '../../../hooks/useMinter';
import {
	CountToMint,
	DecrementButton,
	IncrementButton,
	MintButton,
	MintControl,
} from './styles';

const Index = () => {
	const { count, increment, decrement, mint } = useMinter();

	return (
		<>
			<MintControl>
				<DecrementButton onClick={decrement} />
				<CountToMint count={count} />
				<IncrementButton onClick={increment} />
			</MintControl>
			<MintButton onClick={mint}>Mint</MintButton>
		</>
	);
};

export default Index;

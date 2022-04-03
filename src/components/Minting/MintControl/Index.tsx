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
				<DecrementButton handler={decrement} />
				<CountToMint count={count} />
				<IncrementButton handler={increment} />
			</MintControl>
			<MintButton handler={mint}>Mint</MintButton>
		</>
	);
};

export default Index;

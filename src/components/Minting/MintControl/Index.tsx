import React from 'react';
import useMinter from '../../../hooks/useMinter';
import CountToMint from './CountToMint';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import MintButton from './MintButton';
import MintControl from './MintControl';

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

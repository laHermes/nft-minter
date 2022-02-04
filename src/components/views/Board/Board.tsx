import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getNfts, nftState } from '../../../redux/nfts/nfts';
const Board = () => {
	const dispatch = useDispatch();
	const { nfts, status } = useSelector(nftState);

	useEffect(() => {
		dispatch(getNfts());
	}, [dispatch]);

	const cardStyle = 'bg-gray-100 w-64 h-64';

	return (
		<>
			{status === 'loading' && <p>Loading</p>}
			{status === 'failed' && <p>Failed fetching NFTS from IPFS</p>}

			<div className='p-5 bg-red-400'>
				<div className='flex flex-row py-2'>
					<button className='border p-2'>Click Me</button>
				</div>
				<div className='grid gap-4 grid-flow-row md:grid-flow-col'>
					{nfts.map((nft) => {
						return <div className={cardStyle}>{nft.dna}</div>;
					})}
					<div className={cardStyle}>Card</div>
				</div>
			</div>
		</>
	);
};

export default Board;

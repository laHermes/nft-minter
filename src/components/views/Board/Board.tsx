import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
	getNftMetadata,
	nftState,
	getOnChainNftData,
} from '../../../redux/nfts/nfts';

import { getIpfsImageUrl } from '../../../utils/ipfs';

const Board = () => {
	const dispatch = useDispatch();
	const { nfts, status, nftStats } = useSelector(nftState);

	useEffect(() => {
		dispatch(getNftMetadata());
		dispatch(getOnChainNftData());
	}, [dispatch]);

	const cardStyle = 'bg-gray-900 w-64 h-64 text-white';

	return (
		<div className='p-5'>
			<div>
				{nftStats && <p>EVO ME </p>}
				{status === 'loading' && <p>Loading</p>}
				{status === 'failed' && <p>Failed fetching NFT data from IPFS</p>}
				<div className='flex flex-row py-2'>
					<button className='border p-2'>Click Me</button>
				</div>
			</div>
			<div className='grid gap-4 justify-between auto-cols-max grid-cols-5 w-full'>
				{nfts.map((nft) => {
					return (
						<div className={cardStyle} key={nft.dna}>
							<img src={getIpfsImageUrl(nft.edition)} alt='nftImage' />
							<p>{nft.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Board;

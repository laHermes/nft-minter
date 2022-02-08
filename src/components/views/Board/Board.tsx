import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

	const cardStyle = 'w- full bg-gray-900 text-white w-64';

	return (
		<div className='max-w-screen-xl mx-auto'>
			<div>
				{status === 'loading' && <p>Loading</p>}
				{status === 'failed' && <p>Failed fetching NFT data from IPFS</p>}
				<div className='flex flex-row py-2'>
					<button className='border p-2'>Click Me</button>
				</div>
			</div>
			<div className='flex flex-wrap justify-between gap-1'>
				{nftStats &&
					nfts.map((nft) => {
						return (
							<div className={cardStyle} key={nft.dna}>
								<img src={getIpfsImageUrl(nft.edition)} alt='nftImage' />
								<p>{nft.name}</p>
								{nftStats.owners[nft.edition - 1] ? (
									<p>Owner: {nftStats.owners[nft.edition - 1]}</p>
								) : (
									<p>Buy Me at {nftStats.info.tokenPrice} Eth</p>
								)}
								<p>Traits...</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Board;

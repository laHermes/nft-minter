import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAutoWalletConnect } from '../../../services/web3/wallet/useAutoConnect';
import { getIpfsImageUrl } from '../../../utils/ipfs';
import {
	getNftMetadata,
	nftState,
	getNftInfo,
	getNftOwners,
} from '../../../redux/nfts/nfts';
import { shortenString } from '../../../utils/pureFunctions';

const Board = () => {
	const dispatch = useDispatch();
	const { nfts, status, nftStats } = useSelector(nftState);
	useAutoWalletConnect();

	useEffect(() => {
		dispatch(getNftMetadata());
		dispatch(getNftInfo());

		if (nfts) {
			dispatch(getNftOwners(nfts));
		}
		// avoid circular dependency issues
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<div className='max-w-screen-xl mx-auto'>
			<div>
				{status === 'loading' && <p>Loading</p>}
				<div className='flex flex-row py-2'>
					<button className='border p-2'>Click Me</button>
				</div>
			</div>
			<div className=' justify-between grid grid-cols-4 gap-12'>
				{nftStats &&
					nfts.map((nft) => {
						return (
							<div className='cardStyle' key={nft.dna}>
								<img src={getIpfsImageUrl(nft.edition)} alt='nftImage' />
								<p>{nft.name}</p>

								{nft.ownersAddress ? (
									<p>Owner: {shortenString(nft.ownersAddress)}</p>
								) : (
									<p>Buy Me at Eth</p>
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

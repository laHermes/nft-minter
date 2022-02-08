import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAutoWalletConnect } from '../../../services/web3/wallet/useAutoConnect';
import { isFulfilled } from '@reduxjs/toolkit';
import { INft } from '../../../redux/types';
import {
	getNftMetadata,
	nftState,
	getNftInfo,
	getNftOwners,
} from '../../../redux/nfts/nfts';

import { getIpfsImageUrl } from '../../../utils/ipfs';

const Board = () => {
	const dispatch = useDispatch();
	const { nfts, status, nftStats, owners } = useSelector(nftState);
	useAutoWalletConnect();

	useEffect(() => {
		const load = async () => {
			dispatch(getNftMetadata());
			dispatch(getNftInfo());
			if (nfts) {
				dispatch(getNftOwners(nfts));
			}
		};
		load();
	}, [dispatch]);

	const cardStyle = 'w- full bg-gray-900 text-white w-64';

	return (
		<div className='max-w-screen-xl mx-auto'>
			<div>
				{status === 'loading' && <p>Loading</p>}
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
								{owners[nft.edition - 1] ? (
									<p>Owner: {owners[nft.edition - 1]}</p>
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

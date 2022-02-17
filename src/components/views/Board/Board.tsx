import { getIpfsImageUrl } from '../../../utils/ipfs';
import { nftState, onlyOwned } from '../../../redux/nfts/nfts';
import { shortenString } from '../../../utils/pureFunctions';
import { useSelector } from 'react-redux';

const Board = () => {
	const { nftData, statusBlockchain } = useSelector(nftState);
	const owned = useSelector(onlyOwned);

	return (
		<div className='max-w-screen-xl mx-auto'>
			<div>
				{statusBlockchain === 'loading' && <p>Loading</p>}
				<div className='flex flex-row py-2'>
					<button className='border p-2'>Click Me</button>
				</div>
			</div>
			<div className=' justify-between grid grid-cols-4 gap-12'>
				{statusBlockchain === 'success' &&
					nftData.map((nft) => {
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

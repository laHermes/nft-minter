import { useState } from 'react';
import { getIpfsImageUrl } from '../../../utils/ipfs';
import { nftState, onlyOwned } from '../../../redux/nfts/nfts';
import { shortenString } from '../../../utils/pureFunctions';
import { useSelector } from 'react-redux';
import { Switch } from '@headlessui/react';

const Board = () => {
	const { nftData, statusBlockchain } = useSelector(nftState);
	const [enabled, setEnabled] = useState(false);
	const owned = useSelector(onlyOwned);

	return (
		<div className='max-w-screen-xl mx-auto'>
			<div>
				{statusBlockchain === 'loading' && <p>Loading</p>}
				<div className='flex flex-row py-2'>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? 'bg-blue-600' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11`}>
						<span className='sr-only'>Enable notifications</span>
						<span
							className={`${
								enabled ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
					<button className='border p-2'>Click Me</button>
				</div>
			</div>
			<div className=' justify-between grid grid-cols-4 gap-12'>
				{statusBlockchain === 'success' &&
					nftData.slice(0, 5).map((nft) => {
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

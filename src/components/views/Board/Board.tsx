import { useState } from 'react';
import { nftState, onlyOwned } from '../../../redux/nfts/nfts';
import { useSelector } from 'react-redux';
import { Switch } from '@headlessui/react';
import { BiWalletAlt } from 'react-icons/bi';

const Board = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className='w-screen max-w-screen-md mx-auto '>
			<div className='w-full bg-white/50 rounded-xl'>
				<div className='flex flex-row border-b px-3 py-2'>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? 'bg-blue-600' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11 text-indigo-900`}>
						<span className='sr-only'>Enable notifications</span>
						<span
							className={`${
								enabled ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
				</div>
				<div>
					<BiWalletAlt />
				</div>
			</div>
		</div>
	);
};

export default Board;

{
	/* <div>{statusBlockchain === 'loading' && <p>Loading</p>}</div> */
}
{
	/* <div className='flex flex-col gap-12 bg-white/80 rounded-xl overflow-hidden px-12 py-2 '>
	<Switch
		checked={enabled}
		onChange={setEnabled}
		className={`${
			enabled ? 'bg-blue-600' : 'bg-gray-200'
		} relative inline-flex items-center h-6 rounded-full w-11 text-indigo-900`}>
		<span className='sr-only'>Enable notifications</span>
		<span
			className={`${
				enabled ? 'translate-x-6' : 'translate-x-1'
			} inline-block w-4 h-4 transform bg-white rounded-full`}
		/>
	</Switch>
	<p>Please Connect wallet</p> */
}
{
	/* <p>Please Connect your wallet</p> */
}
{
	/* {statusBlockchain === 'success' &&
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
		})} */
}
{
	/* </div> */
}

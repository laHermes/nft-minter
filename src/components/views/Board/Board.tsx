import { useState } from 'react';
import { Switch } from '@headlessui/react';

//redux state
import { useSelector } from 'react-redux';
import { selectNfts } from '../../../redux/nfts/nfts';

import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';

import Pagination from '../../Pagination/Pagination';

import NftCard from '../../NftCard/NftCard';
import NoWalletWarning from '../../NoWalletWarning/NoWalletWarning';
import { INft } from '../../../redux/types';

const Board = () => {
	const [enabled, setEnabled] = useState(false);
	const { account } = useWalletConnect();
	const { nfts, status } = useSelector(selectNfts);

	const derivedState = nfts.filter((nft: INft) => nft.owner === account);

	return (
		<div className='max-w-screen-lg mx-auto p-5'>
			<div className='w-full rounded-xl border border-purple-500/20'>
				<div className='flex flex-row gap-2 border-b border-purple-500/20 px-3 py-2'>
					<p className='text-white/70'>Only Owned</p>
					<Switch
						disabled={!account}
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

				{!account && <NoWalletWarning />}

				{account && (
					<div className='flex flex-col gap-10 justify-start p-10'>
						<Pagination
							data={enabled ? derivedState : nfts}
							Component={NftCard}
							title='nftCollection'
							itemsPerPage={6}
							pageLimit={3}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Board;

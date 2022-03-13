import React, { useEffect, useState } from 'react';

//redux state
import { useSelector } from 'react-redux';
import { selectNfts, selectUniqueColors } from '../../../redux/nfts/nfts';

import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import useFilter from '../../../hooks/useFilter';
import Pagination from '../../Pagination/Pagination';

import NftCard from '../../NftCard/NftCard';
import NoWalletWarning from '../../NoWalletWarning/NoWalletWarning';
import DataWarning from '../../DataWarning/DataWarning';
import FilterOwned from './FilterOwned';
import FilterColor from './FilterColor';

const Board = () => {
	const [data, setData] = useState<any[]>();

	const { account } = useWalletConnect();
	const { nfts } = useSelector(selectNfts);
	const colors = useSelector(selectUniqueColors);

	const filter = useFilter(nfts);
	const { filtered, filters } = filter;

	console.log(colors);

	useEffect(() => {
		if (!filtered.length && !filters.length) {
			setData(nfts);
			return;
		}
		setData(filtered);
	}, [filtered, filters, nfts]);

	return (
		<div className='max-w-screen-lg mx-auto p-5'>
			<div className='w-full rounded-xl border border-purple-500/20'>
				<div className='flex flex-row gap-2 border-b border-purple-500/20 px-3 py-2'>
					<p className='text-white/70'>Only Owned</p>
					<FilterOwned {...filter} />
					<div>
						<FilterColor {...filter} />
					</div>
				</div>

				{!account && <NoWalletWarning />}

				{account && (
					<div className='flex flex-col gap-10 justify-start p-10'>
						<Pagination
							data={data}
							CardComponent={NftCard}
							WarningComponent={DataWarning}
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

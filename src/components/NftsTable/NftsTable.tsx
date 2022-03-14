import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';
import { selectNfts } from '../../redux/nfts/nfts';
import DataWarning from '../DataWarning/DataWarning';
import NftCard from '../NftCard/NftCard';
import Pagination from '../Pagination/Pagination';
import FilterColor from '../views/Board/FilterColor';
import FilterOwned from '../views/Board/FilterOwned';

const NftsTable = () => {
	const [data, setData] = useState<any[]>();

	const { nfts } = useSelector(selectNfts);
	const filter = useFilter(nfts);

	const { filtered, filters, resetFilters } = filter;

	useEffect(() => {
		if (!filtered.length && !filters.length) {
			setData(nfts);
			return;
		}
		setData(filtered);
	}, [filtered, filters, nfts]);

	return (
		<>
			<div className='flex flex-row gap-2 border-b border-purple-500/20 px-3 py-2'>
				<p className='text-white/70'>Only Owned</p>
				<FilterOwned {...filter} />
				<div>
					<FilterColor {...filter} />
				</div>
				<div>
					<button onClick={resetFilters} className='px-2 bg-white rounded-lg'>
						Reset
					</button>
				</div>
			</div>
			<div className='flex flex-col gap-10 justify-start p-10'>
				{data && (
					<Pagination
						data={data}
						CardComponent={NftCard}
						WarningComponent={DataWarning}
						title='nftCollection'
						itemsPerPage={6}
						pageLimit={3}
					/>
				)}
			</div>
		</>
	);
};

export default NftsTable;

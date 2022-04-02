import React from 'react';
import useFilter from '../../../../hooks/useFilter';
import DataWarning from '../../../DataFallback/DataWarning';
import NftCard from '../NftCard';
import FilterColor from '../../../Filters/FilterColor';
import FilterOwned from '../../../Filters/FilterOwned';
import { ErrorBoundary } from 'react-error-boundary';
import PaginationNavigation from '../../../Pagination/PaginationNavigation/PaginationNavigation';
import usePagination from '../../../../hooks/usePagination';
import NftTable from '../../NftTable/NftTable';
import NoWalletWarning from '../../../Wallet/WalletButton/WalletFallback/NoWalletWarning';
import useWalletConnect from '../../../../services/web3/wallet/useWalletConnect';
import { INft } from '../../../../redux/types';

interface INftsTable {
	data: INft[];
}

const NftsTable = ({ data }: INftsTable) => {
	//get current account
	const { account } = useWalletConnect();

	// filter data
	const filter = useFilter(data);
	const { filtered } = filter;

	//paginate data
	const pagination = usePagination({
		data: filtered,
		itemsPerPage: 6,
		pageLimit: 3,
	});

	const { paginatedData } = pagination;

	return (
		<NftTable>
			<NftTable.Filters>
				<FilterOwned {...filter} />
				<FilterColor {...filter} />
			</NftTable.Filters>
			<NftTable.GridWrapper>
				{account ? (
					<ErrorBoundary FallbackComponent={DataWarning} resetKeys={filtered}>
						<NftTable.Grid>
							{paginatedData.map((nft: any) => (
								<NftCard {...nft} key={nft.id} />
							))}
						</NftTable.Grid>
						<PaginationNavigation {...pagination} />
					</ErrorBoundary>
				) : (
					<NoWalletWarning />
				)}
			</NftTable.GridWrapper>
		</NftTable>
	);
};

export default NftsTable;

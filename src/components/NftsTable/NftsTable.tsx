import React from 'react';
import useFilter from '../../hooks/useFilter';
import DataWarning from '../DataWarning/DataWarning';
import NftCard from '../NftCard/NftCard';
import FilterColor from '../views/Board/FilterColor';
import FilterOwned from '../views/Board/FilterOwned';
import { ErrorBoundary } from 'react-error-boundary';
import PaginationNavigation from '../PaginationNavigation/PaginationNavigation';
import usePagination from '../../hooks/usePagination';
import NftTable from '../NftTable/NftTable';
import NoWalletWarning from '../NoWalletWarning/NoWalletWarning';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';

interface INftsTable {
	data: any[];
}

const NftsTable = ({ data }: INftsTable) => {
	const { account } = useWalletConnect();

	const filter = useFilter(data);
	const { filtered } = filter;

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

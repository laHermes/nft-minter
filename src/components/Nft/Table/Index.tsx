import React from 'react';
import useFilter from '../../../hooks/useFilter';
import DataFallback from '../../DataFallback/Index';
import NftCard from '../Card/Index';
import FilterColor from '../../Filters/FilterColor';
import FilterOwned from '../../Filters/FilterOwned';
import { ErrorBoundary } from 'react-error-boundary';
import usePagination from '../../../hooks/usePagination';
import NftTable from './styles';
import NoWalletWarning from '../../Wallet/WalletFallback/Index';
import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import { INft } from '../../../redux/types';
import PageNavigation from '../../PageNavigation/Index';

interface INftsTable {
	data: INft[];
}

const Index = ({ data }: INftsTable) => {
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
				<NftTable.FilterName>Dominant Color </NftTable.FilterName>
				<FilterColor {...filter} />
				<NftTable.FilterName>Show Owned</NftTable.FilterName>
				<FilterOwned {...filter} />
			</NftTable.Filters>
			<NftTable.GridWrapper>
				{account && (
					<ErrorBoundary
						FallbackComponent={DataFallback}
						resetKeys={paginatedData}>
						<NftTable.Grid>
							{!!paginatedData.length &&
								paginatedData.map((nft: any) => {
									return <NftCard {...nft} key={nft.id} />;
								})}
						</NftTable.Grid>
						{!!paginatedData.length && <PageNavigation {...pagination} />}
						{!paginatedData.length && <DataFallback />}
					</ErrorBoundary>
				)}

				{!account && <NoWalletWarning />}
			</NftTable.GridWrapper>
		</NftTable>
	);
};

export default Index;

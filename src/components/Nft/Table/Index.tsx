import React from 'react';

// hooks & selectors
import { useSelector } from 'react-redux';
import useWalletConnect from '@services/web3/wallet/useWalletConnect';
import useFilter from '@hooks/useFilter';
import usePagination from '@hooks/usePagination';
import { selectNfts } from '@redux/nfts/nfts';

// components
import FilterOwned from '@components/Filters/FilterOwned';
import NftCard from '../Card/Index';
import NftTable from './styles';
import PageNavigation from '@components/PageNavigation/Index';
import DataFallback from '@components/DataFallback/Index';
import NoWalletWarning from '@components/Wallet/WalletFallback/Index';

const Index = () => {
	//get current account
	const { nfts: data } = useSelector(selectNfts);

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
			<NftTable.Heading>
				<div className='flex flex-row w-full py-6'>
					<div className='grow'>
						<h2 className='text-white text-4xl font-bold'>Collection</h2>
						<p className='text-white/40 font-semibold'>
							Only minted nfts will be displayed in collection!
						</p>
					</div>
					<div className='self-center flex flex-row gap-2'>
						<NftTable.FilterName>Owned</NftTable.FilterName>
						<FilterOwned {...filter} />
					</div>
				</div>
			</NftTable.Heading>
			<NftTable.GridWrapper>
				{account && (
					<>
						<NftTable.Grid>
							{!!paginatedData.length &&
								paginatedData.map((nft: any) => {
									return <NftCard {...nft} key={nft.id} />;
								})}
						</NftTable.Grid>
						{!!paginatedData.length && <PageNavigation {...pagination} />}
						{!paginatedData.length && <DataFallback />}
					</>
				)}

				{!account && <NoWalletWarning />}
			</NftTable.GridWrapper>
		</NftTable>
	);
};

export default Index;

import React, { useContext } from 'react';

// hooks & selectors
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

// components
import FilterOwned from 'components/Filters/FilterOwned';
import NftCard from '../Card/Index';
import NftTable from './styles';
import PageNavigation from 'components/PageNavigation/Index';
import DataFallback from 'components/DataFallback/Index';
import NoWalletWarning from 'components/Wallet/WalletFallback/Index';
import { PaginationCtx } from 'store/PaginationContext';

const withHigherOrderContent = (Component: React.FC) => (props: any) => {
	const { account } = useWalletConnect();

	if (!account) return <NoWalletWarning />;
	if (!props.data.length) return <DataFallback />;

	return <Component {...props} />;
};

const BaseContent: React.ComponentType<any> = ({ data }) => {
	return (
		<NftTable.Grid>
			{data.map((nft: any) => {
				return <NftCard {...nft} key={nft.id} />;
			})}
		</NftTable.Grid>
	);
};

const Content = withHigherOrderContent(BaseContent);

const Index = () => {
	const pagCtx = useContext(PaginationCtx);
	const { pagination, filtered } = pagCtx;

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
						<FilterOwned {...filtered!} />
					</div>
				</div>
			</NftTable.Heading>
			<NftTable.GridWrapper>
				<Content data={pagination?.paginatedData} />
				{!!pagination?.paginatedData.length && (
					<PageNavigation {...pagination} />
				)}
			</NftTable.GridWrapper>
		</NftTable>
	);
};

export default Index;

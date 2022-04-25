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
import { IPaginated } from 'types';
import { compose } from '@reduxjs/toolkit';

const Index = () => {
	const pagCtx = useContext(PaginationCtx);
	const { pagination, filtered } = pagCtx;
	const { account } = useWalletConnect();
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
						{filtered && <FilterOwned {...filtered} />}
					</div>
				</div>
			</NftTable.Heading>
			<NftTable.GridWrapper>
				<Content showIcon={true} data={pagination?.paginatedData} />
				<PageNav
					account={account}
					showIcon={false}
					data={pagination?.paginatedData}
					{...pagination}
				/>
			</NftTable.GridWrapper>
		</NftTable>
	);
};

export default Index;

const withAccount = (Component: React.FC<IPaginated>) => (props: any) => {
	const { account } = useWalletConnect();
	const { showIcon } = props;

	if (!account) {
		if (showIcon) {
			return <NoWalletWarning />;
		}
		return null;
	}

	return <Component {...props} />;
};

const withData = (Component: React.FC<IPaginated>) => (props: any) => {
	const { data, showIcon } = props;

	if (!data?.length) {
		if (showIcon) {
			return <DataFallback />;
		}
		return null;
	}

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

const Content = compose(
	withAccount,
	withData
)(BaseContent) as React.ComponentType<any>;

const PageNav = compose(
	withAccount,
	withData
)(PageNavigation) as React.ComponentType<any>;

import React, { useContext } from 'react';
import { InboxIcon } from '@heroicons/react/outline';
// hooks & selectors
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

// components
import FilterOwned from 'features/Filter/components/FilterOwned';
import NftCard from '../../Elements/Card/Index';
import NftTable from './styles';
import PageNav from 'features/Paginate/components/PageNav';
import { PaginationCtx } from 'features/Paginate/context/PaginationContext';
import { IPaginated } from 'types';
import { compose } from '@reduxjs/toolkit';
import Fallback from 'components/Elements/Fallback/Fallback';
import {
	Table,
	GridWrapper,
	FilterName,
} from 'components/Elements/Table/Table';

const Index = () => {
	const pagCtx = useContext(PaginationCtx);
	const { pagination, filtered } = pagCtx;
	const { account } = useWalletConnect();
	return (
		<Table>
			<div className='flex flex-row w-full py-6'>
				<div className='grow'>
					<h2 className='text-white text-4xl font-bold'>Collection</h2>
					<p className='text-white/40 font-semibold'>
						Only minted nfts will be displayed in collection!
					</p>
				</div>
				<div className='self-center flex flex-row gap-2'>
					<FilterName>Owned</FilterName>
					{filtered && <FilterOwned {...filtered} />}
				</div>
			</div>
			<GridWrapper>
				<Content data={pagination?.paginatedData} showIcon />
				<PageNavigation
					account={account}
					showIcon={false}
					data={pagination?.paginatedData}
					{...pagination}
				/>
			</GridWrapper>
		</Table>
	);
};

export default Index;

const withData = (Component: React.FC<IPaginated>) => (props: any) => {
	const { data, showIcon } = props;

	if (!data?.length) {
		if (showIcon) {
			return <Fallback warningText='No NFTs found' Icon={InboxIcon} />;
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

const Content = compose(withData)(BaseContent) as React.ComponentType<any>;

const PageNavigation = compose(withData)(PageNav) as React.ComponentType<any>;

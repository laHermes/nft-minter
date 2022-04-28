import React, { useContext } from 'react';
import { compose } from '@reduxjs/toolkit';

// components
import Link from 'components/Elements/Link/Link';

// hooks & selectors
import useWalletConnect from 'features/connect/hooks/useWalletConnect';

// components
import FilterOwned from 'features/Filter/components/FilterOwned';
import NftCard from 'components/NftCard/NftCard';
import PageNav from 'features/Paginate/components/PageNav';
import { PaginationCtx } from 'features/Paginate/context/PaginationContext';
import { IPaginated } from 'types';
import Fallback from 'components/Elements/Fallback/Fallback';
import { InboxIcon } from '@heroicons/react/outline';
import {
	Table,
	GridWrapper,
	Grid,
	FilterName,
} from 'components/Elements/Table/Table';

// types
import { INft } from 'redux/types';

const Collection = () => {
	const pagCtx = useContext(PaginationCtx);
	const { pagination, filtered } = pagCtx;
	const { account } = useWalletConnect();
	return (
		<div className='max-w-screen-lg mx-auto p-5 pt-8'>
			<div className='flex flex-row w-full bg-modal-base px-6 py-4 rounded-[12px]'>
				<div className='grow'>
					<h2 className='text-white text-2xl font-bold'>Mint NFT</h2>
					<p className='text-white/40 font-semibold'>
						Only minted nfts will be displayed in collection!
					</p>
				</div>
				<div className='self-center'>
					<Link to='/'>Go To Minter </Link>
				</div>
			</div>
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
		</div>
	);
};

export default Collection;

// HOC

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
		<Grid>
			{data.map((data: INft) => {
				return <NftCard key={data.id} {...data} />;
			})}
		</Grid>
	);
};

const Content = compose(withData)(BaseContent) as React.ComponentType<any>;

const PageNavigation = compose(withData)(PageNav) as React.ComponentType<any>;

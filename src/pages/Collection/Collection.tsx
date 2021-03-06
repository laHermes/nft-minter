import React, { useContext, useEffect } from 'react';
import { compose } from '@reduxjs/toolkit';

// hooks & selectors
import useWalletConnect from 'features/connect/hooks/useWalletConnect';

// components
import Link from 'components/Elements/Link/Link';
import InfoCard from 'components/Elements/InfoCard/InfoCard';
import FilterOwned from 'features/Filter/components/FilterOwned';
import NftCard from 'components/NftCard/NftCard';
import PageNav from 'features/Paginate/components/PageNav';
import { PaginationCtx } from 'features/Paginate/context/PaginationContext';
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

const Info = {
	title: 'Mint NFT',
	description: 'Only minted nfts will be displayed in collection!',
	actionComponent: (
		<Link to='/mint' className='w-full h-fit'>
			<span className='w-full'>&nbsp;Minter</span>
		</Link>
	),
};

const Collection = () => {
	const pagCtx = useContext(PaginationCtx);
	const { pagination, filtered } = pagCtx;

	if (pagCtx === undefined) {
		throw new Error('Collection must be used within a Pagination Context');
	}

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div className='max-w-screen-lg w-full mx-auto p-5 pt-8 '>
			<InfoCard
				title={Info.title}
				description={Info.description}
				actionComponent={Info.actionComponent}
			/>
			<Table>
				<div className='flex flex-col text-center lg:text-left lg:flex-row w-full py-6'>
					<div className='grow w-full'>
						<h2 className='text-white text-4xl lg:text-4xl font-bold'>
							Collection
						</h2>
						<p className='text-white/40 text-md lg:text-xl font-semibold'>
							Only minted nfts will be displayed in collection!
						</p>
					</div>
					<div className='self-center flex flex-row gap-2 mt-8 lg:mt-0'>
						<FilterName>Owned</FilterName>
						{filtered && <FilterOwned {...filtered} />}
					</div>
				</div>
				<GridWrapper>
					<Content data={pagination?.paginatedData} />
					<PageNav {...pagination} />
				</GridWrapper>
			</Table>
		</div>
	);
};

export default Collection;

// HOC
const withData = (Component: React.FC<any>) => (props: any) => {
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

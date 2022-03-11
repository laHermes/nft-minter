import React, { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { Listbox } from '@headlessui/react';

//redux state
import { useSelector } from 'react-redux';
import { selectNfts } from '../../../redux/nfts/nfts';

import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import useFilter, { Group } from '../../../hooks/useFilter';
import Pagination from '../../Pagination/Pagination';

import NftCard from '../../NftCard/NftCard';
import NoWalletWarning from '../../NoWalletWarning/NoWalletWarning';
import { INft } from '../../../redux/types';

const Board = () => {
	const [enabled, setEnabled] = useState(false);
	const [selectedColor, setSelectedColor] = useState<string>();
	const [colors, setColors] = useState<string[]>();

	const [data, setData] = useState<any[]>();

	const { account } = useWalletConnect();

	const { nfts } = useSelector(selectNfts);
	const { filtered, toggleFilter, filterExists } = useFilter(nfts);

	useEffect(() => {
		const colorsArray = Array.from(
			new Set(nfts.map((nft: INft) => nft.metadata.attributes[0].value))
		);
		setColors(colorsArray);
		setSelectedColor(colorsArray[0]);
	}, []);

	useEffect(() => {
		if (!filtered.length) {
			setData(nfts);
			return;
		}
		setData(filtered);
	}, [filtered, nfts]);

	return (
		<div className='max-w-screen-lg mx-auto p-5'>
			<div className='w-full rounded-xl border border-purple-500/20'>
				<div className='flex flex-row gap-2 border-b border-purple-500/20 px-3 py-2'>
					<p className='text-white/70'>Only Owned</p>
					<Switch
						disabled={!account}
						checked={filterExists(
							'0xb92D5337b5b6eEA5517238c773e3A94DD6e2c544',
							Group.OWNED
						)}
						onChange={() => {
							setEnabled(!enabled);
							toggleFilter(
								'0xb92D5337b5b6eEA5517238c773e3A94DD6e2c544',
								Group.OWNED,
								(nft: INft) =>
									nft.owner === '0xb92D5337b5b6eEA5517238c773e3A94DD6e2c544'
							);
						}}
						className={`${
							enabled ? 'bg-purple-600/80' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11 text-indigo-900`}>
						<span
							className={`${
								enabled ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
					<div>
						{colors && (
							<Listbox
								value={selectedColor}
								onChange={(e: string) => {
									setSelectedColor(e);
									toggleFilter(
										e,
										Group.COLOR,
										(nft: INft) => nft.metadata.attributes[0].value === e
									);
								}}>
								<Listbox.Button className='bg-white px-2 rounded-sm'>
									{selectedColor}
								</Listbox.Button>
								<Listbox.Options className='bg-yellow-50'>
									{colors.map((color, index) => (
										<Listbox.Option
											key={index}
											value={color}
											// onClick={() =>
											// 	toggleFilter(
											// 		color,
											// 		Group.COLOR,
											// 		(nft: INft) =>
											// 			nft.metadata.attributes[0].value === color
											// 	)
											// }
											className='bg-white overflow-hidden'>
											{color}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Listbox>
						)}
					</div>
				</div>

				{!account && <NoWalletWarning />}

				{account && (
					<div className='flex flex-col gap-10 justify-start p-10'>
						{data && (
							<Pagination
								data={data}
								CardComponent={NftCard}
								WarningComponent={NoWalletWarning}
								title='nftCollection'
								itemsPerPage={6}
								pageLimit={3}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Board;

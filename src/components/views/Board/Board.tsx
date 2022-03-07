import { useState } from 'react';
import { Switch } from '@headlessui/react';

//icon
import { BiWalletAlt } from 'react-icons/bi';

//redux state
import { useSelector } from 'react-redux';
import { nftState } from '../../../redux/nfts/nfts';

import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import ImageLoader from '../../ImageLoader/ImageLoader';
import { shortenString } from '../../../utils/pureFunctions';
import Pagination from '../../Pagination/Pagination';

import NftCard from '../../NftCard/NftCard';

const Board = () => {
	const [enabled, setEnabled] = useState(false);
	const { account } = useWalletConnect();
	const { nfts, status } = useSelector(nftState);

	return (
		<div className='max-w-screen-lg mx-auto px-4'>
			<div className='w-full rounded-xl border border-purple-500/20'>
				<div className='flex flex-row gap-2 border-b border-purple-500/20 px-3 py-2'>
					<p className='text-white/70'>Only Owned</p>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? 'bg-blue-600' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11 text-indigo-900`}>
						<span className='sr-only'>Enable notifications</span>
						<span
							className={`${
								enabled ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
				</div>
				{!account && (
					<div className='h-96 w-full flex flex-col gap-3 justify-start p-20'>
						<BiWalletAlt className='self-center text-5xl text-white/70' />
						<p className='self-center text-xl text-white/70'>
							Please connect you wallet!
						</p>
					</div>
				)}

				<Pagination
					data={nfts}
					Component={NftCard}
					title='nftCollection'
					itemsLimit={6}
					pageLimit={3}
				/>

				{/* {account && paginatedData && (
					<div className='flex flex-col gap-3 justify-start p-10'>
						<div className='grid grid-cols-3 gap-4 w-full'>
							{paginatedData.map((nft: any) => {
								return (
									<div
										key={nft.id}
										className='p-2 bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400 rounded-md'>
										<div className='flex flex-col gap-2 p-3 h-full bg-blue-nft-theme/80 rounded-md'>
											<div className='h-64'>
												<ImageLoader url={nft.metadata.image} />
											</div>
											<div className='flex flex-row justify-between'>
												<p className='font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200 text-md'>
													Lorem Ipsum #{nft.id}
												</p>
											</div>
											<p className='text-sm text-indigo-50 font-medium tracking-wider '>
												Owner: {shortenString(nft.owner)}
											</p>
											{nft.metadata.attributes.map(
												(attribute: any, index: number) => (
													<p
														key={index}
														className='text-md text-indigo-50 font-medium'>
														{attribute.trait_type}: {attribute.value}
													</p>
												)
											)}
										</div>
									</div>
								);
							})}
						</div>
						<div className='inline-flex items-center gap-3 text-white'>
							<button
								onClick={previousPage}
								className='w-18 p-2 backdrop-blur-sm bg-inherit ring ring-purple-900 rounded-lg'>
								Previous
							</button>
							<p>{totalPages}</p>
							<button
								onClick={nextPage}
								className='w-18 p-2 backdrop-blur-sm bg-inherit ring ring-purple-900 rounded-lg'>
								Next
							</button>
						</div>
					</div>
				)} */}
			</div>
		</div>
	);
};

export default Board;

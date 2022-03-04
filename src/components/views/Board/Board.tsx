import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from '@headlessui/react';
import { BiWalletAlt } from 'react-icons/bi';
import { nftState } from '../../../redux/nfts/nfts';
import { shortenString } from '../../../utils/pureFunctions';

import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import usePagination from '../../../hooks/usePagination';

const Board = () => {
	const [enabled, setEnabled] = useState(false);

	const { account } = useWalletConnect();

	const { nfts, status } = useSelector(nftState);

	const { paginatedData, nextPage, previousPage, totalPages } = usePagination(
		nfts,
		6
	);

	return (
		<div className=' max-w-screen-lg mx-auto '>
			<div className='w-full bg-white/50 rounded-xl'>
				<div className='flex flex-row border-b border-white/40 px-3 py-2'>
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
				{status === 'loading' && !paginatedData && <p>Loading</p>}

				{account && paginatedData && (
					<div className='flex flex-col gap-3 justify-start p-10'>
						<div className='grid grid-cols-3 gap-4 w-fit'>
							{paginatedData.map((nft: any) => {
								return (
									<div
										className='backdrop-blur-xl bg-white/50 text-indigo-100 rounded-xl shadow-xl'
										key={nft.id}>
										<div className='flex flex-col gap-1'>
											<img
												src={nft.metadata.image}
												alt='nft'
												className='rounded-lg shadow-xl'
											/>

											<p className='text-xl text-indigo-50 font-medium tracking-wider self-center'>
												{shortenString(nft.owner)}
											</p>
											<p className='text-xl text-indigo-50 font-medium tracking-wider self-center'>
												{nft.id}
											</p>
											<p className='text-xl text-indigo-50 font-medium tracking-wider self-center'>
												{nft.metadata.description}
											</p>
											{nft.metadata.attributes.map(
												(attribute: any, index: number) => (
													<p
														key={index}
														className='text-xl text-indigo-50 font-medium tracking-wider self-center'>
														{attribute.trait_type}: {attribute.value}
													</p>
												)
											)}
										</div>
									</div>
								);
							})}
						</div>
						<div className='inline-flex gap-3'>
							<button
								onClick={previousPage}
								className='p-2 backdrop-blur-sm bg-slate-500/30 text-indigo-900 border rounded-lg'>
								Previous
							</button>
							<p>{totalPages}</p>

							<button
								onClick={nextPage}
								className='p-2 backdrop-blur-sm bg-slate-500/30 text-indigo-900 border rounded-lg'>
								Next
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Board;

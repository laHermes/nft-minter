import React, { useRef, useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Account from './styles';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import { shortenString } from '../../utils/pureFunctions';

const Index = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [copied, setCopied] = useState<string>('');

	const cancelButtonRef = useRef(null);

	useEffect(() => {
		setCopied('');
	}, [open]);

	const { account } = useWalletConnect();
	return (
		<>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as='div'
					className='fixed z-10 inset-0 overflow-y-hidden'
					initialFocus={cancelButtonRef}
					onClose={setOpen}>
					<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<Dialog.Overlay className='fixed inset-0 backdrop-blur-sm  bg-opacity-75 transition-opacity' />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className='hidden sm:inline-block sm:align-middle sm:h-screen'
							aria-hidden='true'>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<div className='relative inline-block align-bottom bg-modal-base rounded-[12px] text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
								<div className=' px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
									<div className='sm:flex sm:items-start'>
										{/* <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'> */}
										{/* <ExclamationIcon
												className='h-6 w-6 text-red-600'
												aria-hidden='true'
											/> */}
										{/* </div> */}
										<div className='flex flex-col gap-4 mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-2xl leading-6 font-medium text-white/90'>
												Account
											</Dialog.Title>
											<div className='flex flex-row grow gap-1 items-stretch bg-default-primary/40 rounded-[12px]'>
												<input
													type='text'
													name='account'
													id='account'
													readOnly
													value={account!}
													className='grow p-2 bg-transparent text-white/90 font-bold text-xl rounded-[12px] outline-0	'
												/>
												<div className='bg-default-primary/60 hover:bg-default-primary rounded-[12px]'>
													<svg
														onClick={() =>
															navigator.clipboard.writeText(account!).then(
																() => {
																	setCopied('Address copied');
																},
																() => {
																	setCopied('Copy failed!');
																}
															)
														}
														xmlns='http://www.w3.org/2000/svg'
														className='h-12 w-12 text-white/80 hover:text-white/90 p-2'
														viewBox='0 0 20 20'
														fill='currentColor'>
														<path d='M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z' />
														<path d='M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z' />
													</svg>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
									<button className='bg-white rounded-[12px] p-2'>
										Disconnect
									</button>
									{copied && <p className='text-white'>{copied}</p>}
									{/* <button
										type='button'
										className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
										onClick={() => setOpen(false)}>
										Deactivate
									</button>
									<button
										type='button'
										className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
										onClick={() => setOpen(false)}
										ref={cancelButtonRef}>
										Cancel
									</button> */}
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
			<Account
				title={shortenString(account!)}
				onClick={() => setOpen((state) => !state)}
			/>
		</>
	);
};

export default Index;

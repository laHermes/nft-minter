import React, { useEffect, useState } from 'react';
import { useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { shortenString } from '../../../utils/pureFunctions';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

interface IAccountModal {
	open: boolean;
	setOpen: any;
	account: string;
	handleDisconnect: () => void;
}

const Index = ({ open, setOpen, account, handleDisconnect }: IAccountModal) => {
	const [copied, setCopied] = useState<string>('');
	const [isCopied, setIsCopied] = useState<Boolean>(false);

	useEffect(() => {
		setCopied('');
	}, [open]);

	useEffect(() => {
		if (!isCopied) return;
		const listener = setTimeout(() => {
			setIsCopied(false);
		}, 1000);

		return () => {
			clearTimeout(listener);
		};
	}, [isCopied]);

	const copyHandler = () => {
		navigator.clipboard.writeText(account!).then(
			() => {
				setIsCopied(true);
			},
			() => {
				setIsCopied(false);
			}
		);
	};

	const cancelButtonRef = useRef(null);

	return (
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
							<div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='flex flex-col gap-4 mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<Dialog.Title
											as='h3'
											className='text-2xl leading-6 font-medium text-white/90'>
											Account
										</Dialog.Title>
										<div className='flex flex-col grow gap-4 border rounded-[12px] py-4 px-2'>
											<p className='text-white/50'>Connected with Metamask</p>

											<div className='flex flex-row gap-2'>
												<Jazzicon
													diameter={24}
													seed={jsNumberForAddress(account!)}
												/>

												<span className='text-white text-2xl leading-none'>
													{shortenString(account!)}
												</span>
											</div>
											<div className='flex flex-row gap-3'>
												{isCopied ? (
													<button className='inline-flex gap-1 text-white/60'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															className='h-4 w-4'
															fill='none'
															viewBox='0 0 24 24'
															stroke='currentColor'
															strokeWidth={2}>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M5 13l4 4L19 7'
															/>
														</svg>
														<p className='text-sm'>Copied</p>
													</button>
												) : (
													<button
														className='inline-flex gap-1 text-white/60'
														onClick={copyHandler}>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															className='h-4 w-4 '
															fill='none'
															viewBox='0 0 24 24'
															stroke='currentColor'
															strokeWidth={2}>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
															/>
														</svg>
														<p className='text-sm'>Copy Address</p>
													</button>
												)}
												<button
													className='inline-flex gap-1 text-white/60'
													onClick={copyHandler}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-4 w-4'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'
														strokeWidth={2}>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
														/>
													</svg>
													<p className='text-sm'>View on Explorer</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-row justify-between px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									onClick={() => {
										handleDisconnect();
										setOpen(false);
									}}
									className='bg-white rounded-[12px] p-2'>
									Disconnect
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Index;

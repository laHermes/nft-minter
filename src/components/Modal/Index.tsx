import React, { useEffect, useState } from 'react';
import { useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { shortenString } from 'utils/pureFunctions';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import {
	DuplicateIcon,
	CheckCircleIcon,
	ExternalLinkIcon,
} from '@heroicons/react/outline';

interface IAccountModal {
	open: boolean;
	setOpen: any;
	account: string;
	handleDisconnect: () => void;
}

const Index = ({ open, setOpen, account, handleDisconnect }: IAccountModal) => {
	const [isCopied, setIsCopied] = useState<Boolean>(false);

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
						<div className=' relative inline-block align-bottom bg-modal-base rounded-[12px] text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='p-4 sm:p-6 sm:pb-4 '>
								<div className='sm:flex sm:items-start '>
									<div className='flex flex-col gap-4 w-full text-left '>
										<Dialog.Title
											as='h3'
											className='text-2xl leading-6 font-medium text-white/90'>
											Account
										</Dialog.Title>
										<div className='flex flex-col grow gap-5 border border-white/30 rounded-[12px] p-4'>
											<div className='flex flex-row justify-between'>
												<p className='text-white/50'>Connected with Metamask</p>
												<button
													onClick={() => {
														handleDisconnect();
														setOpen(false);
													}}
													className='border border-red-500/40  hover:border-red-400/60 text-red-600 hover:text-red-500 rounded-[12px] p-1 text-sm'>
													Disconnect
												</button>
											</div>
											<div className='flex flex-row gap-2'>
												<Jazzicon
													diameter={20}
													seed={jsNumberForAddress(account!)}
												/>
												<span className='text-white text-xl leading-none'>
													{shortenString(account!)}
												</span>
											</div>
											<div className='flex flex-row gap-3'>
												{isCopied ? (
													<button className='inline-flex gap-1 text-white/60 text-xs'>
														<CheckCircleIcon className='h-4 w-4' />
														Copied
													</button>
												) : (
													<button
														className='inline-flex gap-1 text-white/60 text-xs'
														onClick={copyHandler}>
														<DuplicateIcon className='h-4 w-4' />
														Copy Address
													</button>
												)}
												<button
													className='inline-flex gap-1 text-white/60 text-xs'
													onClick={copyHandler}>
													<ExternalLinkIcon className='h-4 w-4' />
													View on Explorer
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Index;

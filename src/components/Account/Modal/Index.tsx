import React, { useEffect, useState } from 'react';
import { useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface IAccountModal {
	open: boolean;
	setOpen: any;
	account: string;
	handleDisconnect: () => void;
}

const Index = ({ open, setOpen, account, handleDisconnect }: IAccountModal) => {
	const [copied, setCopied] = useState<string>('');

	useEffect(() => {
		setCopied('');
	}, [open]);

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
							<div className=' px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
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
																setCopied('Address copied!');
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
							<div className='flex flex-row justify-between px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									onClick={() => {
										handleDisconnect();
										setOpen(false);
									}}
									className='bg-white rounded-[12px] p-2'>
									Disconnect
								</button>
								{copied && <p className='text-white'>{copied}</p>}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Index;

// Components
import { Dialog } from '@headlessui/react';

import Modal from 'components/Elements/Modal/Modal';
import { Button } from 'components/Elements/Button/Button';
import { useModalContext } from 'store/ModalContext';
import { XIcon } from '@heroicons/react/outline';

const MintModal = () => {
	const { hideModal } = useModalContext();

	const handleModalToggle = () => {
		hideModal();
	};
	const MintAndClose = () => {
		handleModalToggle();
	};

	// Estimated transaction fee
	// network fee

	// number of nfts
	// Total
	// amount + gas

	return (
		<Modal show={true} onClose={handleModalToggle}>
			<div className='relative inline-block align-bottom bg-modal-base rounded-[12px] text-center overflow-hidden shadow-xl transform transition-all mx-2 sm:my-8 sm:align-middle sm:px-0 max-w-xl w-full'>
				<div className='p-4 sm:p-6 sm:pb-4 '>
					<div className='sm:flex sm:items-start '>
						<div className='flex flex-col w-full text-left'>
							<div className='flex flex-row justify-between w-full text-white/90'>
								<Dialog.Title
									as='h3'
									className='text-2xl leading-6 font-medium text-white/90'>
									Transaction details
								</Dialog.Title>
								<button onClick={handleModalToggle}>
									<XIcon className='w-6 hover:text-white' />
								</button>
							</div>

							<div className='flex flex-col grow gap-2 rounded-[12px] py-4'>
								<div className='flex flex-row justify-between'>
									<p className='text-white/70 text-sm sm:text-lg'>
										Estimated transaction fee
									</p>
									<p>$ 5.78</p>
								</div>
								<div className='flex flex-row justify-between'>
									<p className='text-white/70 text-sm sm:text-lg'>
										Network fee
									</p>
									<p>$ 5.78</p>
								</div>
								<div className='flex flex-row justify-between'>
									<p className='text-white/70 text-sm sm:text-lg'>NFTS#</p>
									<p>NN</p>
								</div>
								<div className='flex flex-row justify-between'>
									<div>
										<p className='text-white/70 text-sm sm:text-lg'>Total</p>
										<p className='text-sm text-white/70'>
											AMOUNT * PRICE + GAS
										</p>
									</div>
									<p>NN</p>
								</div>

								<div className='flex flex-row gap-3'>
									<Button onClick={MintAndClose}>Confirm</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default MintModal;

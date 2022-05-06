// Components
import { Dialog } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import Modal from 'components/Elements/Modal/Modal';

import { useModalContext } from 'store/ModalContext';
import { XIcon } from '@heroicons/react/outline';
import AccountInfo from 'components/AccountModal/AccountInfo';
import { nftInfo } from 'config/nft';
import { useMintContext } from '../context/MintContext';
import { shortenString } from 'utils/pureFunctions';

const TransactionModal = () => {
	const { hideModal } = useModalContext();
	const { status, transaction, renderStatusComponent } = useMintContext();

	const handleModalToggle = () => {
		hideModal();
	};

	const itemStyle = 'text-white/90 font-semibold text-sm sm:text-lg';
	const itemAttribute = 'text-sm font-bold text-white';

	return (
		<Modal show={true} onClose={handleModalToggle}>
			<div className='relative inline-block align-bottom bg-modal-base/80 rounded-[12px] text-center overflow-hidden shadow-xl transform transition-all mx-2 sm:my-8 sm:align-middle sm:px-0 max-w-xl w-full'>
				<div className='p-4 sm:p-6 sm:pb-4 '>
					<div className='sm:flex sm:items-start '>
						<div className='flex flex-col w-full text-left'>
							<div className='flex flex-row justify-between w-full text-white/90'>
								<Dialog.Title
									as='h3'
									className='text-2xl leading-6 font-semi text-white/90'>
									Transaction submitted
								</Dialog.Title>
								<button onClick={handleModalToggle}>
									<XIcon className='w-6 hover:text-white' />
								</button>
							</div>

							<div className='flex flex-row justify-between mt-6 text-white px-2 sm:px-12'>
								<div className='text-center'>
									<div className='mb-2'>
										<span>FROM: </span>
										<span className='text-white/40 text-sm'>User</span>
									</div>
									{/* <AccountInfo /> */}
									<AccountInfo address={nftInfo.nftAddress} />
								</div>

								<div className='text-center'>
									<div className='mb-2'>
										<span>TO: </span>
										<span className='text-white/40 text-sm'>Contract</span>
									</div>
									<AccountInfo address={nftInfo.nftAddress} />
								</div>
							</div>

							<div className='flex flex-col gap-2 py-4'>
								<div>
									<p className={itemStyle}>
										Your transaction has been submitted and is being processed.
									</p>
									<p className={itemStyle}>
										Your can view the status of the transaction in the explorer
									</p>
								</div>
								{/* <div className='flex flex-row justify-between'>
									<p className={itemStyle}>Status</p>
									<span className={itemAttribute}>{status?.status}</span>
								</div> */}

								{/* <div className='flex flex-row justify-between'>
									<p className={itemStyle}>Transaction HASH</p>
									<span className={itemAttribute}>
										{transaction?.transactionHash &&
											shortenString(transaction?.transactionHash)}
									</span>
								</div>
								<div className='flex flex-row justify-between'>
									<p className={itemStyle}>Confirmations</p>
									<span className={itemAttribute}>
										{transaction?.confirmations}
									</span>
								</div> */}
							</div>

							{renderStatusComponent()}
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default TransactionModal;

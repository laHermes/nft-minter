// Components
import { Dialog } from '@headlessui/react';
import CopyButton from './CopyButton';
import AccountInfo from './AccountInfo';
import ViewExplorer from './ViewExplorer';
import Modal from 'components/Elements/Modal/Modal';
import { Button } from 'components/Elements/Button/Button';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { useModalContext } from 'store/ModalContext';
import { XIcon } from '@heroicons/react/outline';

const Index = () => {
	const { hideModal } = useModalContext();
	const { handleDisconnect, account } = useWalletConnect();

	const handleModalToggle = () => {
		hideModal();
	};
	const disconnectWalletAndClose = () => {
		handleModalToggle();
		handleDisconnect();
	};

	return (
		<Modal show={true} onClose={handleModalToggle}>
			<div className='relative inline-block align-bottom bg-modal-base rounded-[12px] text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full'>
				<div className='p-4 sm:p-6 sm:pb-4 '>
					<div className='sm:flex sm:items-start '>
						<div className='flex flex-col gap-4 w-full text-left '>
							<div className='flex flex-row justify-between w-full text-white/90'>
								<Dialog.Title
									as='h3'
									className='text-2xl leading-6 font-medium text-white/90'>
									Account
								</Dialog.Title>
								<button onClick={handleModalToggle}>
									<XIcon className='w-6 hover:text-white' />
								</button>
							</div>

							<div className='flex flex-col grow gap-5 border border-white/30 rounded-[12px] p-4'>
								<div className='flex flex-row justify-between'>
									<p className='text-white/50'>Connected with Metamask</p>
									<Button
										onClick={disconnectWalletAndClose}
										variant='disconnect'>
										Disconnect
									</Button>
								</div>
								<div className='flex flex-row gap-2'>
									<AccountInfo />
								</div>
								<div className='flex flex-row gap-3'>
									{account && (
										<>
											<CopyButton />
											<ViewExplorer />
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default Index;

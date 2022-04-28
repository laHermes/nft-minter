import { useRef, Fragment } from 'react';

// Components
import { Dialog } from '@headlessui/react';
import CopyButton from './CopyButton';
import AccountInfo from './AccountInfo';
import ViewExplorer from './ViewExplorer';
import Modal from 'components/Elements/Modal/Modal';
import { Button } from 'components/Elements/Button/Button';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { useModalContext } from 'store/ModalContext';

const Index = () => {
	const { hideModal } = useModalContext();
	const { handleDisconnect } = useWalletConnect();

	const handleModalToggle = () => {
		hideModal();
	};
	const disconnectWalletAndClose = () => {
		handleModalToggle();
		handleDisconnect();
	};

	return (
		<Modal show={true} onClose={handleModalToggle}>
			<Dialog.Title
				as='h3'
				className='text-2xl leading-6 font-medium text-white/90'>
				Account
			</Dialog.Title>

			<div className='flex flex-col grow gap-5 border border-white/30 rounded-[12px] p-4'>
				<div className='flex flex-row justify-between'>
					<p className='text-white/50'>Connected with Metamask</p>
					<Button onClick={disconnectWalletAndClose} variant='disconnect'>
						Disconnect
					</Button>
				</div>
				<div className='flex flex-row gap-2'>
					<AccountInfo />
				</div>
				<div className='flex flex-row gap-3'>
					<CopyButton />
					<ViewExplorer />
				</div>
			</div>
		</Modal>
	);
};

export default Index;

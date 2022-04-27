import { useRef, Fragment } from 'react';

// Components
import { Dialog } from '@headlessui/react';
import CopyButton from './Elements/CopyButton';
import AccountInfo from './Elements/AccountInfo';
import ViewExplorer from './Elements/ViewExplorer';
import Modal from 'components/Elements/Modal/Modal';
import { Button } from 'components/Elements/Button/Button';

interface IAccountModal {
	open: boolean;
	setOpen: any;
	handleDisconnect: () => void;
}

const Index = ({ open, setOpen, handleDisconnect }: IAccountModal) => {
	const disconnectWalletAndClose = () => {
		handleDisconnect();
		setOpen(false);
	};
	return (
		<Modal open={open} setOpen={setOpen}>
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

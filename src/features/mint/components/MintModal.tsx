// Components
import { Dialog } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import Modal from 'components/Elements/Modal/Modal';
import { Button } from 'components/Elements/Button/Button';
import { MODAL_TYPES, useModalContext } from 'store/ModalContext';
import { XIcon } from '@heroicons/react/outline';
import AccountInfo from 'components/AccountModal/AccountInfo';
import { nftInfo } from 'config/nft';
import { useMintContext } from '../context/MintContext';

interface IDetails {
	attribute: string;
	attributeSub?: string;
	value: string | number;
}

const MintModal = () => {
	const { hideModal } = useModalContext();
	const { count, mint, status, resetState } = useMintContext();

	if (!mint || !count || !resetState) {
		throw new Error(
			'This modal can only bre used within minter context provider'
		);
	}

	const handleModalToggle = () => {
		hideModal();
		resetState();
	};

	const mintAndTransact = () => {
		mint();
	};

	const itemStyle = 'text-white/90 font-semibold text-sm sm:text-lg';
	const itemAttribute = 'text-sm font-semibold text-white/90';

	const details: IDetails[] = [
		{
			attribute: 'NFTS#',
			attributeSub: '',
			value: count,
		},
		{
			attribute: 'Price per NFT',
			attributeSub: '',
			value: nftInfo.price + ' ' + nftInfo.tokenName,
		},
		{
			attribute: 'Network',
			attributeSub: '',
			value: nftInfo.network,
		},
		{
			attribute: 'Total',
			attributeSub: 'AMOUNT * PRICE',
			value: `~${(+nftInfo.price * count).toPrecision(2)} Matic`,
		},
	];

	return (
		<Modal show={true} onClose={handleModalToggle}>
			<div className='flex flex-row justify-between w-full text-white/90'>
				<Dialog.Title
					as='h3'
					className='text-2xl leading-6 font-semi text-white/90'>
					Transaction details
				</Dialog.Title>
				<button onClick={handleModalToggle}>
					<XIcon className='w-6 hover:text-white' />
				</button>
			</div>

			{/* Direction FROM account TO account */}
			<FromToTransactionDirection />

			<div className='flex flex-col grow gap-2 rounded-[12px] py-4'>
				{/* transaction attribute to value */}
				{/* Total -> "Price" */}
				{details.map((detail) => {
					return (
						<TransactionAttributeToValue key={detail.attribute} {...detail} />
					);
				})}

				{status?.status === 'SUBMITTED' && (
					<div className=' flex flex-col gap-3 mt-4 pt-4 border-t border-white/80'>
						<p className={itemStyle}>
							Your transaction has been submitted and is being processed.
						</p>
						<p className={itemStyle}>
							Your can view the status of the transaction in the explorer
						</p>
					</div>
				)}

				<StatusComponent />
				<div className='flex flex-row justify-end'>
					<Button variant='gradientBg' onClick={mintAndTransact}>
						{status?.status === 'ERROR' ? 'Try Again' : 'Confirm'}
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default MintModal;

const FromToTransactionDirection = () => {
	return (
		<div className='flex flex-row justify-between mt-6 text-white px-2 sm:px-12'>
			{/* FROM */}
			{/* BY DEFAULT if account/wallet is not connected it shows ZERO ADDRESS */}
			<div className='text-center'>
				<div className='mb-2'>
					<span>FROM: </span>
					<span className='text-white/40 text-sm'>User</span>
				</div>
				<AccountInfo />
			</div>

			{/* TO */}
			{/* Contract address */}
			<div className='text-center'>
				<div className='mb-2'>
					<span>TO: </span>
					<span className='text-white/40 text-sm'>Contract</span>
				</div>
				<AccountInfo address={nftInfo.nftAddress} />
			</div>
		</div>
	);
};

const TransactionAttributeToValue = ({
	attribute,
	attributeSub,
	value,
}: IDetails) => {
	return (
		<div key={attribute} className='flex flex-row justify-between'>
			<div>
				<p className='text-white/90 font-semibold text-sm sm:text-xl'>
					{attribute}
				</p>
				<p className='text-xs font-light text-white/70'>{attributeSub}</p>
			</div>
			<span className='text-2xl font-bold text-white'>{value}</span>
		</div>
	);
};

// Shows current transaction status or
const StatusComponent = () => {
	const { renderStatusComponent } = useMintContext();
	if (!renderStatusComponent()) {
		return (
			<div className='inline-flex gap-2 my-2 py-2 px-3 bg-blue-900/40 text-blue-600 rounded-[12px] '>
				<ExclamationCircleIcon className='h-6 mt-2' />
				<span>
					By clicking on the confirm button, Metamask wallet will pop up
				</span>
			</div>
		);
	}
	return renderStatusComponent();
};

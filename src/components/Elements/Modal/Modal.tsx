import { Fragment } from 'react';

// Components
import { Dialog, Transition } from '@headlessui/react';

interface IModal {
	show: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ show, onClose, children }: IModal) => {
	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog
				as='div'
				className='fixed z-10 inset-0 overflow-y-hidden backdrop-blur-md'
				onClose={onClose}>
				<div className='flex items-end justify-center min-h-screen w-full pt-4 pb-56 text-center sm:block sm:p-0'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Dialog.Overlay className='fixed inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity ' />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen '
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
						{children}
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Modal;

import React, { useContext, createContext, useState } from 'react';

// modals
import AccountModal from 'components/AccountModal/Index';
import MintModal from 'features/mint/components/MintModal';
import TransactionModal from 'features/mint/components/TransactionModal';

export enum MODAL_TYPES {
	ACCOUNT = 'ACCOUNT',
	MINT = 'MINT',
	TRANSACTION = 'TRANSACTION',
}

const MODAL_COMPONENTS: any = {
	[MODAL_TYPES.ACCOUNT]: AccountModal,
	[MODAL_TYPES.MINT]: MintModal,
	[MODAL_TYPES.TRANSACTION]: TransactionModal,
};

type ModalContextType = {
	showModal: (modalType: MODAL_TYPES, modalProps?: any) => void;
	hideModal: () => void;
	store: any;
};

const initialProps: ModalContextType = {
	showModal: () => {},
	hideModal: () => {},
	store: {},
};
export const ModalContext = createContext<ModalContextType>(initialProps);
export const useModalContext = () => useContext(ModalContext);

const ModalProvider: React.FC<{}> = ({ children }) => {
	const [store, setStore] = useState<any>();
	const { modalType, modalProps } = store || {};

	const renderModal = () => {
		const ModalComponent = MODAL_COMPONENTS[modalType];
		if (!modalType || !ModalComponent) return null;

		return <ModalComponent {...modalProps} />;
	};

	const showModal = (modalType: MODAL_TYPES, modalProps: any) => {
		setStore({ ...store, modalType, modalProps });
	};

	const hideModal = () => {
		setStore({
			...store,
			modalType: null,
			modalProps: null,
		});
	};

	return (
		<ModalContext.Provider value={{ store, showModal, hideModal }}>
			{renderModal()}
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;

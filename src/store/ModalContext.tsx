import React, { useContext, createContext, useState } from 'react';
import AccountModal from 'components/AccountModal/Index';

export enum MODAL_TYPES {
	ACCOUNT = 'ACCOUNT',
}
const MODAL_COMPONENTS: any = {
	[MODAL_TYPES.ACCOUNT]: AccountModal,
};

type ModalContextType = {
	showModal: (modalType: MODAL_TYPES, modalProps?: any) => void;
	hideModal: () => void;
	store: any;
};

const inintalProps: ModalContextType = {
	showModal: () => {},
	hideModal: () => {},
	store: {},
};
export const ModalContext = createContext<ModalContextType>(inintalProps);
export const useModalContext = () => useContext(ModalContext);

const ModalProvider: React.FC<{}> = ({ children }) => {
	const [store, setStore] = useState<any>();
	const { modalType, modalProps } = store || {};

	const renderModal = () => {
		const ModalComponent = MODAL_COMPONENTS[modalType];
		if (!modalType || !ModalComponent) return null;

		return <ModalComponent {...modalProps} />;
	};

	const showModal = (modalType: MODAL_TYPES, props: any) => {
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

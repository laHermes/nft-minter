import React from 'react';

// hooks
import useWalletConnect from 'features/connect/hooks/useWalletConnect';

// components
import { Button } from 'components/Elements/Button/Button';
import WalletButton from 'features/connect/components/WalletButton';

//utils
import { shortenString } from 'utils/pureFunctions';
import { MODAL_TYPES, useModalContext } from 'store/ModalContext';

const ConnectAccount = () => {
	const { account } = useWalletConnect();
	const { showModal } = useModalContext();

	const showAccountModal = () => {
		showModal(MODAL_TYPES.ACCOUNT);
	};

	return !account ? (
		<WalletButton title='Connect Wallet' />
	) : (
		<Button onClick={showAccountModal} variant='primary'>
			{shortenString(account!)}
		</Button>
	);
};

export default ConnectAccount;

import { useState } from 'react';

// hooks
import useWalletConnect from 'features/connect/hooks/useWalletConnect';

// components
import { Button } from 'components/Elements/Button/Button';
import WalletButton from 'features/connect/components/WalletButton';

//utils
import { shortenString } from 'utils/pureFunctions';

const ConnectAccount = () => {
	const { account } = useWalletConnect();
	const [open, setOpen] = useState<boolean>(false);

	return !account ? (
		<WalletButton title='Connect Wallet' />
	) : (
		<Button onClick={() => setOpen((state) => !state)} variant='primary'>
			{shortenString(account!)}
		</Button>
	);
};

export default ConnectAccount;

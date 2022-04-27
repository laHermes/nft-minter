import { useState } from 'react';
import { shortenString } from 'utils/pureFunctions';
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

// components
import AccountModal from 'components/AccountModal/Index';
import { Button } from 'components/Elements/Button/Button';

const Index = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { account, handleDisconnect } = useWalletConnect();

	return (
		<>
			<AccountModal
				open={open}
				setOpen={setOpen}
				handleDisconnect={handleDisconnect}
			/>

			<Button onClick={() => setOpen((state) => !state)} variant='primary'>
				{shortenString(account!)}
			</Button>
		</>
	);
};

export default Index;

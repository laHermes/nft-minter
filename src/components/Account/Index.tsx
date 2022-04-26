import { useState } from 'react';
import { shortenString } from 'utils/pureFunctions';
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

// components
import Account from './Account';
import AccountModal from 'components/Modal/Index';
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
			<Button onClick={() => setOpen((state) => !state)}>
				{shortenString(account!)}
			</Button>
			{/* <Account
				title={shortenString(account!)}
				onClick={() => setOpen((state) => !state)}
			/> */}
		</>
	);
};

export default Index;

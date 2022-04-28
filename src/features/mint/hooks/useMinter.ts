import { useState } from 'react';

// utility functions
import { mintToken } from 'services/web3/utils';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { hasEnoughEth } from 'services/web3/utils';

// toast notifications
import { toast } from 'react-toastify';

const UPPER_BOUND = 10;
const LOWER_BOUND = 1;
const NFT_PRICE = '0.03';

const useMinter = () => {
	const [count, setCount] = useState<number>(1);

	const { account } = useWalletConnect();

	const increment = () =>
		setCount((count: number) => Math.min(count + 1, UPPER_BOUND));

	const decrement = () =>
		setCount((count: number) => Math.max(count - 1, LOWER_BOUND));

	const mint = async () => {
		// make sure the wallet is connected
		if (!account) {
			toast.warn('Please connect wallet');
			return;
		}

		// make sure the user has enough matic tokens to mint nfts
		const hasEnough = await hasEnoughEth(NFT_PRICE, count);
		if (!hasEnough) {
			toast.warn('Not enough funds');
			return;
		}

		//mint tokens function
		await toast.promise(mintToken(count), {
			pending: 'NFT minting is pending',
			success: 'NFT minted 👌',
			error: 'Minting failed 🤯',
		});
	};

	return { count, increment, decrement, setCount, mint };
};

export default useMinter;

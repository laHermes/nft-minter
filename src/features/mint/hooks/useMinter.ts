import { useState } from 'react';
import { ethers, utils, Contract } from 'ethers';
import { writeWeb3, getProvider, web3 } from 'services/web3/index';
import {
	nftAddress,
	nftAbi,
	nftPrice,
} from 'services/web3/contracts/ContractExports';
import { INft } from 'redux/types';
import axios from 'axios';
// utility functions
import { mintToken } from 'services/web3/utils';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { hasEnoughEth } from 'services/web3/utils';

// toast notifications
import { toast } from 'react-toastify';

const UPPER_BOUND = 10;
const LOWER_BOUND = 1;
const NFT_PRICE = '0.03';

enum states {
	IDLE = 'IDLE',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
}

interface IStatus {
	status: states;
	msg?: any;
}
const initialStatus: IStatus = { status: states.IDLE, msg: '' };

const useMinter = () => {
	const [count, setCount] = useState<number>(1);
	const [status, setStatus] = useState<IStatus>(initialStatus);
	const [transaction, setTransaction] = useState<any>();

	const { account } = useWalletConnect();

	const increment = () =>
		setCount((count: number) => Math.min(count + 1, UPPER_BOUND));

	const decrement = () =>
		setCount((count: number) => Math.max(count - 1, LOWER_BOUND));

	const mint = async () => {
		// make sure the wallet is connected
		setStatus({ status: states.LOADING });

		if (!account) {
			setStatus({
				status: states.ERROR,
				msg: 'No account connected, check wallet connection',
			});

			return;
		}

		// make sure the user has enough matic tokens to mint nfts
		const hasEnough = await hasEnoughEth(NFT_PRICE, count);
		if (!hasEnough) {
			setStatus({ status: states.ERROR, msg: 'Not enough funds' });
			return;
		}

		const value = utils.parseEther(nftPrice).mul(count);

		try {
			setStatus({ status: states.LOADING, msg: '' });

			// define the contract
			const contract = new Contract(nftAddress, nftAbi, writeWeb3.signer);
			const userAddress = await writeWeb3.signer?.getAddress();
			const tx = await contract.mintToken(userAddress, count, {
				value,
			});
			setTransaction(tx);

			await tx.wait().then(
				(res: any) => {
					setTransaction(res);
					setStatus({ status: states.SUCCESS, msg: 'Success' });
				},
				(err: any) => console.log(err)
			);
		} catch (err) {
			setStatus({ status: states.ERROR, msg: 'Error in minting' });
			console.warn(err);
			throw new Error();
		}
	};

	return { count, increment, decrement, setCount, mint, status, transaction };
};

export default useMinter;

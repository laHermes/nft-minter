import { useEffect, useState } from 'react';
import { ethers, utils, Contract } from 'ethers';
import { writeWeb3, getProvider, web3 } from 'services/web3/index';
import {
	nftAddress,
	nftAbi,
	nftPrice,
} from 'services/web3/contracts/ContractExports';

// utility functions
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import { hasEnoughEth } from 'services/web3/utils';
import { nftInfo } from 'config/nft';

const UPPER_BOUND = 10;
const LOWER_BOUND = 1;

enum STATES {
	IDLE = 'IDLE',
	SUBMITTED = 'SUBMITTED',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
}

interface IStatus {
	status: STATES;
	msg?: any;
}

const initialStatus: IStatus = { status: STATES.IDLE, msg: '' };

const useMinter = () => {
	const [count, setCount] = useState<number>(1);
	const [status, setStatus] = useState<IStatus>(initialStatus);
	const [transaction, setTransaction] = useState<any>();

	const { account } = useWalletConnect();

	const increment = () =>
		setCount((count: number) => Math.min(count + 1, UPPER_BOUND));

	const decrement = () =>
		setCount((count: number) => Math.max(count - 1, LOWER_BOUND));

	const resetState = () => {
		setStatus(initialStatus);
		setTransaction(null);
	};

	const isAccountConnected = () => {
		if (!account) {
			setStatus({
				status: STATES.ERROR,
				msg: 'No account connected, check wallet connection',
			});
			return false;
		}
		resetState();

		return true;
	};

	const hasEnoughTokensForTransaction = async () => {
		const hasEnough = await hasEnoughEth(nftInfo.price, count);
		if (!hasEnough) {
			setStatus({ status: STATES.ERROR, msg: 'Not enough funds' });
			return false;
		}
		resetState();
		return true;
	};

	// MINT FUNCTION
	const mint = async () => {
		resetState();

		if (!isAccountConnected()) return;
		if (!hasEnoughTokensForTransaction()) return;

		// get total cost
		const value = utils.parseEther(nftPrice).mul(count);

		try {
			// define the contract
			const contract = new Contract(nftAddress, nftAbi, writeWeb3.signer);

			// transaction
			const tx = await contract.mintToken(account, count, {
				value,
			});

			// set status
			setStatus({
				status: STATES.SUBMITTED,
				msg: 'Transaction has been submitted',
			});
			setTransaction(tx);

			// waiting for confirmation
			await tx.wait().then(
				(res: any) => {
					setTransaction(res);
					setStatus({ status: STATES.SUCCESS, msg: 'Success' });
				},
				(err: any) =>
					setStatus({
						status: STATES.ERROR,
						msg: err.data.message || err.message || 'Error Minting',
					})
			);
		} catch (err: any) {
			setStatus({
				status: STATES.ERROR,
				msg: err.data.message || err.message || 'Error Minting',
			});
		}
	};

	return {
		count,
		increment,
		decrement,
		setCount,
		mint,
		status,
		transaction,
		resetState,
	};
};

export default useMinter;

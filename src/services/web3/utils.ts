import { ethers, utils } from 'ethers';
import { writeWeb3, getProvider } from './index';
import { Contract, Provider } from 'ethcall';

export const mintToken = async (address: string, amount: number) => {
	const value = utils.parseEther('0.05').mul(amount);

	const contract = new ethers.Contract('', '', writeWeb3.signer);
	try {
		await contract.mintToken(address, amount, { value: value });
		return {};
	} catch (err) {
		console.log(err);
		// if (e.code === ErrorCode.DeniedTx)
		// 	return {
		// 		type: NotificationType.error,
		// 		title: 'Transaction Rejected',
		// 		msg: 'You rejected the transaction. If this was by mistake, please try again.',
		// 	};
		// dispatch notification
	}

	// wait transaction
	// await
};

export const fetchAllNfts = async () => {
	const ethcallProvider = new Provider();
	ethcallProvider.init(getProvider());

	const nftContract = new Contract('address', '');

	const data = await nftContract.getAllNfts();

	return data;
};

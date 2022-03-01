import { ethers, utils } from 'ethers';
import { writeWeb3, getProvider } from './index';
import { nftAddress, nftAbi } from '../../contracts/ContractExports';
import { INft } from '../../redux/types';
import axios from 'axios';

// Mint token
export const mintToken = async (amount: number) => {
	const value = utils.parseEther('0.03').mul(amount);

	const contract = new ethers.Contract(nftAddress, nftAbi, writeWeb3.signer);

	try {
		await contract.mintToken(writeWeb3.signer.getAddress(), amount, {
			value: value,
		});
		return {};
	} catch (err) {
		console.log(err);
		// if (e.code === ErrorCode.DeniedTx)
		// 	return {
		// 		type: NotificationType.error,
		// 		title: 'Transaction Rejected',
		// 		msg: 'You rejected the transaction. If this was by mistake, please try again.',
		// 	};
		// return notification notification
	}

	// wait transaction
};

export const fetchAllNfts = async (): Promise<INft[]> => {
	const contract = new ethers.Contract(nftAddress, nftAbi, getProvider());

	const data = await contract.getAllNfts();

	const meta = data.map(async (nft: INft) => {
		return await axios.get(nft.uri).then((res) => res.data);
	});

	const resolvedMetadata = await Promise.all(meta);

	return data.map((nft: INft, index: number) => {
		return {
			id: utils.formatUnits(nft.id, 0),
			owner: nft.owner,
			uri: nft.uri,
			metadata: resolvedMetadata[index],
		};
	});
};

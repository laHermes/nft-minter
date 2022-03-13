import { ethers, utils, Contract } from 'ethers';
import { writeWeb3, getProvider, web3 } from './index';
import { nftAddress, nftAbi, nftPrice } from '../../contracts/ContractExports';
import { INft } from '../../redux/types';
import axios from 'axios';

// Mint token
export const mintToken = async (amount: number) => {
	const value = utils.parseEther(nftPrice).mul(amount);

	try {
		// define the contract
		const contract = new Contract(nftAddress, nftAbi, writeWeb3.signer);
		const userAddress = await writeWeb3.signer.getAddress();

		await contract.mintToken(userAddress, amount, {
			value,
		});
	} catch (err) {
		throw new Error();
	}
};

// function to check user's balance
export const hasEnoughEth = async (price: string, amount: number) => {
	const value = utils.parseEther(price).mul(amount);

	if (!(await web3.balance).gte(value)) {
		return false;
	}
	return true;
};

// fetch minted NFTS from blockchain
export const fetchAllNfts = async (): Promise<INft[]> => {
	//define nft contract
	const contract = new ethers.Contract(nftAddress, nftAbi, getProvider());

	// fetch data from the contract
	const data = await contract.getAllNfts();

	// get image links
	const meta = data.map(async (nft: INft) => {
		return await axios.get(nft.uri).then((res) => res.data);
	});

	// resolve image links
	const resolvedMetadata = await Promise.all(meta);

	//create array of nfts to be returned to the view
	return data.map((nft: INft, index: number) => {
		return {
			id: utils.formatUnits(nft.id, 0),
			owner: nft.owner,
			uri: nft.uri,
			metadata: resolvedMetadata[index],
		};
	});
};

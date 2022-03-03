import { ethers, utils, Contract } from 'ethers';
import { writeWeb3, getProvider, web3 } from './index';
import { nftAddress, nftAbi, nftPrice } from '../../contracts/ContractExports';
import { INft } from '../../redux/types';
import axios from 'axios';

// Mint token
export const mintToken = async (amount: number) => {
	// make sure the wallet is connected if not dispatch message
	if (!writeWeb3.signer) {
		//dispatch message
		return;
	}

	const value = utils.parseEther(nftPrice).mul(amount);

	if (!(await web3.balance).gte(value)) {
		//dispatch message
		return;
	}

	// define the contract
	const contract = new Contract(nftAddress, nftAbi, writeWeb3.signer);

	try {
		const tx = await contract.mintToken(await web3.address, amount, {
			value,
		});

		const receipt = await tx.wait();
		//dispatch message with receipt

		//on resolver message display success
	} catch (err) {
		console.log(err);
		// dispatch message on error
	}
};

// fetch minted NFTS from blockchain
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

import { Contract, Provider } from 'ethcall';
import { getProvider } from '..';
import { store } from '../../../redux';
import Collection from '../../../contracts/Collection.json';
import { BigNumberish, utils } from 'ethers';

type OwnersType = null | string;

interface IDataFormat {
	tokenPrice: string;
	maxMintableTokens: number;
	totalSupply: string;
	saleStatus: boolean;
	nftName: string;
}

const NFT_ADDRESS = '0xd1B1193A591139CB46f3B55a341a92F4C6791B31';
const provider = store.dispatch(getProvider);

export const mulitCall = async () => {
	const ethcallProvider = new Provider();
	await ethcallProvider.init(provider);

	const contract = new Contract(NFT_ADDRESS, Collection.abi);
	const maxTokensReq = contract.MAX_TOKENS_AMOUNT();
	const tokenPriceReq = contract.TOKEN_PRICE();
	const totalSupplyReq = contract.totalSupply();
	const saleStatusReq = contract.openSale();
	const nameReq = contract.name();

	// first multicall
	const data: BigNumberish[] = await ethcallProvider.all([
		maxTokensReq,
		tokenPriceReq,
		totalSupplyReq,
		saleStatusReq,
		nameReq,
	]);

	//returns formated data
	const preData = dataFormat(data);

	const tokenOwners = [];

	// iterate max mintable tokens to fetch owner
	for (let i = 0; i < preData.maxMintableTokens; i++) {
		tokenOwners.push(contract.ownerOf(i));
	}

	// second multicall
	//returns either owner's address or null
	const dataSec: OwnersType[] = await ethcallProvider.tryAll(tokenOwners);
};

const dataFormat = (
	data: BigNumberish[],
	granularity: number = 0
): IDataFormat => {
	return {
		tokenPrice: utils.formatEther(data[1]),
		maxMintableTokens: parseInt(utils.formatUnits(data[0], granularity)),
		totalSupply: utils.formatUnits(data[2], granularity),
		saleStatus: !!data[3],
		nftName: data[4].toString(),
	};
};

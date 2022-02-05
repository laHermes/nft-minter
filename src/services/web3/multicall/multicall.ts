import { Contract, Provider } from 'ethcall';
import { getProvider } from '..';
import { store } from '../../../redux';
import Collection from '../../../contracts/Collection.json';
import { BigNumber, BigNumberish, utils } from 'ethers';
import { isBigNumberish } from '@ethersproject/bignumber/lib/bignumber';

type ethData = BigNumber | boolean;

const NFT_ADDRESS = '0xf15bF72Da22db469F5375A9f55c88000a159b8dE';
const provider = store.dispatch(getProvider);

export const mulitCall = async () => {
	const ethcallProvider = new Provider();
	await ethcallProvider.init(provider);

	const contract = new Contract(NFT_ADDRESS, Collection.abi);
	const maxTokensReq = contract.MAX_TOKENS_AMOUNT();
	const tokenPriceReq = contract.TOKEN_PRICE();
	const totalSupplyReq = contract.totalSupply();
	const saleStatusReq = contract.openSale();

	const data: BigNumberish[] = await ethcallProvider.all([
		maxTokensReq,
		tokenPriceReq,
		totalSupplyReq,
		saleStatusReq,
	]);

	console.log(dataFormat(data));
};

const dataFormat = (data: BigNumberish[]) => {
	return {
		tokenPrice: utils.formatEther(data[1]),
		maxMintableTokens: utils.formatUnits(data[0], 0),
		totalSupply: utils.formatUnits(data[2], 0),
		saleStatus: data[3],
	};
};

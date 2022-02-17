import Market from './NFTMarket.json';
import CollectionsNFT from './Collection.json';

export const Contracts = {
	nft: {
		address: '0x7CD3c403FAd9C0484e52B0B647526b674614Be14',
		abi: CollectionsNFT.abi,
	},
	market: {
		address: '',
		abi: Market.abi,
	},
};

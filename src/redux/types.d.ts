export type OwnersType = null | string;

export interface IDataFormat {
	tokenPrice: string;
	maxMintableTokens: number;
	totalSupply: string;
	saleStatus: boolean;
	nftName: string;
}

export interface INft {
	name: string;
	description: string;
	image: string;
	dna: string;
	edition: number;
	date: number;
	attributes: [{ trait_type: string; value: string }];
	compiler?: string;
}

export interface IGetOnChainNftData {
	info: IDataFormat;
	owners: OwnersType[];
}

export interface INfts {
	nfts: [INft] | [];
	nftStats: IGetOnChainNftData | null;
	owners: OwnersType[];
	status: any;
}

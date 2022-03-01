export interface IDataFormat {
	tokenPrice: string;
	maxMintableTokens: number;
	totalSupply: string;
	saleStatus: boolean;
	nftName: string;
}

export interface IMarketNft {
	name: string;
	description: string;
	image: string;
	dna: string;
	edition: number;
	date: number;
	attributes: [{ trait_type: string; value: string }];
	compiler?: string;
	ownersAddress?: string;
}

export interface INft {
	id: number;
	owner: string;
	uri: string;
	metadata?: any;
}

export type OwnersType = null | string;

export interface INfts {
	nfts: INft[];
	status: string | null;
}

interface IMinterCountState {
	count: number;
}

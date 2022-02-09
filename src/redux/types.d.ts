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
	ownersAddress?: string;
}

export type OwnersType = null | string;

export interface INfts {
	nftData: INft[] | [];
	nftStats: IDataFormat | null;
	statusMetadata: string | null;
	statusBlockchain: string | null;
}

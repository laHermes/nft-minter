import { utils, BigNumberish } from 'ethers';
import { IDataFormat } from './types';

export const dataFormat = (
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

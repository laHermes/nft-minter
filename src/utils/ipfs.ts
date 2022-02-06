export enum Ipfs {
	CollectionHash = 'Qma8NKXGJCtXmkK9jZGVKb9xN1NgsvUfYWdCdRwemsWfTk',
	GatewayURL = 'https://ipfs.infura.io/ipfs/',
	Extension = '.png',
}

type IpfsImageExtension = '.png' | '.jpg' | '.jpeg' | '.svg';

export const getIpfsImageUrl = (
	id: number,
	hash: string = Ipfs.CollectionHash,
	extension: IpfsImageExtension = Ipfs.Extension
) => {
	return `${Ipfs.GatewayURL + hash + '/' + id + extension}`;
};

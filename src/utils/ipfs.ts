export const getIpfsImageUrl = (id: number, extension: string = '.png') => {
	const hash = 'Qma8NKXGJCtXmkK9jZGVKb9xN1NgsvUfYWdCdRwemsWfTk';
	const url = `https://ipfs.infura.io/ipfs/`;
	return `${url + hash + '/' + id + extension}`;
};

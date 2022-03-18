declare global {
	export enum Ipfs {
		CollectionHash = 'Qma8NKXGJCtXmkK9jZGVKb9xN1NgsvUfYWdCdRwemsWfTk',
		Extension = '.png',
	}

	type IpfsImageExtension = '.png' | '.jpg' | '.jpeg' | '.svg';

	export interface IChildren {
		children: ReactNode;
	}
}

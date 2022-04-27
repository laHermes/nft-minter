import { ReactNode } from 'react';

declare enum Ipfs {
	CollectionHash = 'Qma8NKXGJCtXmkK9jZGVKb9xN1NgsvUfYWdCdRwemsWfTk',
	Extension = '.png',
}

type IpfsImageExtension = '.png' | '.jpg' | '.jpeg' | '.svg';

interface IChildren {
	children: ReactNode;
}

interface IUsePagination {
	data: any[];
	itemsPerPage: number;
	pageLimit: number;
}
interface IPaginated {
	nextPage: any;
	previousPage: any;
	changePage: any;
	paginatedData: any[];
	currentPage: number;
	totalPages: number;
	paginationGroup: number[] | [] | undefined;
}

interface IPricePill {
	price: string;
	logoUrl?: string;
}

interface IMintCardImage {
	url: string;
}

interface IFilterColor {
	toggleGroupFilter: Function;
	removeAllGroupFilters: Function;
	filters: any[];
}

export {
	Ipfs,
	IpfsImageExtension,
	IChildren,
	IUsePagination,
	IPaginated,
	ICountToMint,
	IPricePill,
	IMintCardImage,
	IFilterColor,
};

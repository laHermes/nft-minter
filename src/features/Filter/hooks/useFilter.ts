import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import { INft } from 'redux/types';
import useWalletConnect from 'features/connect/hooks/useWalletConnect';

export enum Group {
	OWNED = 'owned',
	COLOR = 'color',
}

type Filter = {
	name: string | number;
	group: Group;
	fnc: Function;
};

export interface IFiltered {
	filters: any[];
	filtered: any[];
	toggleFilter: Function;
	toggleGroupFilter: Function;
	resetFilters: Function;
	filterExists: Function;
	removeAllGroupFilters: Function;
}

const useFilter = (data: INft[]): IFiltered => {
	const [filters, setFilters] = useState<Filter[]>([]);
	const [filtered, setFiltered] = useState<any[]>(data);

	const accountRef = useRef<any>(null);

	const { account } = useWalletConnect();

	useEffect(() => {
		const filteredData = data.filter((instance) => {
			const owned = isGroupFilterActive(instance, filters, Group.OWNED);
			const color = isGroupFilterActive(instance, filters, Group.COLOR);

			return owned && color;
		});

		setFiltered(filteredData);
	}, [data, filters]);

	// filters nfts when account is changed and filter is active
	useEffect(() => {
		if (filterExists(accountRef.current, Group.OWNED) && account) {
			removeAllGroupFilters(Group.OWNED);
			toggleGroupFilter(
				account,
				Group.OWNED,
				(nft: INft) => nft.owner === account
			);
		}
		accountRef.current = account;
	}, [account]);

	const filterExists = (name: string | number, group: Group) =>
		filters.find((filter) => filter.name === name && filter.group === group) !==
		undefined;

	const addFilter = (name: string | number, group: Group, fnc: Function) =>
		setFilters((filters) => [...filters, { name, group, fnc }]);

	const removeFilter = (name: string | number, group: Group) =>
		setFilters((currentFilters) =>
			currentFilters.filter(
				(filter) => !(filter.name === name && filter.group === group)
			)
		);

	// resets all filters
	const resetFilters = () => {
		if (!filters?.length) return;
		setFilters([]);
	};

	// removes all filters of group Group
	const removeAllGroupFilters = (group: Group) => {
		setFilters((currentFilters) =>
			currentFilters.filter((filter) => !(filter.group === group))
		);
	};

	// toggle individual filter
	const toggleFilter = debounce(
		(name: string | number, group: Group, fnc: Function) => {
			if (filterExists(name, group)) {
				removeFilter(name, group);
				return;
			}
			addFilter(name, group, fnc);
		},
		500
	);

	// toggle filter of Group (used by selectors and radio buttons)
	const toggleGroupFilter = (
		name: string | number,
		group: Group,
		fnc: Function
	) => {
		if (filterExists(name, group)) {
			return;
		}

		removeAllGroupFilters(group);

		addFilter.apply(null, [name, group, fnc]);
	};

	// show data by owner
	const isGroupFilterActive = (nft: any, filters: Filter[], group: Group) => {
		const groupFilters = filters.filter((filter) => filter.group === group);
		if (!groupFilters.length) return true;
		return groupFilters.some((filter) => filter.fnc(nft));
	};

	return {
		filters,
		filtered,
		toggleFilter,
		toggleGroupFilter,
		resetFilters,
		filterExists,
		removeAllGroupFilters,
	};
};

export default useFilter;

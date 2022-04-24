import { useEffect, useState } from 'react';
import { INft } from '@redux/types';

export enum Group {
	OWNED = 'owned',
	COLOR = 'color',
}

type Filter = {
	name: string | number;
	group: Group;
	fnc: Function;
};

const useFilter = (data: INft[]) => {
	const [filters, setFilters] = useState<Filter[]>([]);
	const [filtered, setFiltered] = useState<any[]>(data);

	useEffect(() => {
		const filteredData = data.filter((instance) => {
			const owned = isGroupFilterActive(instance, filters, Group.OWNED);
			const color = isGroupFilterActive(instance, filters, Group.COLOR);

			return owned && color;
		});

		setFiltered(filteredData);
	}, [data, filters]);

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
	const toggleFilter = (name: string | number, group: Group, fnc: Function) => {
		if (filterExists(name, group)) {
			removeFilter(name, group);
			return;
		}
		addFilter(name, group, fnc);
	};

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
		toggleFilter,
		toggleGroupFilter,
		resetFilters,
		filterExists,
		removeAllGroupFilters,
		filtered,
	};
};

export default useFilter;

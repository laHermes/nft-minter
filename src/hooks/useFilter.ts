import { useEffect, useState } from 'react';
import { INft } from '../redux/types';

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
			const owned = isShownByOwned(instance, filters);
			const color = isShownByColor(instance, filters);

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

	const resetFilters = () => {
		setFilters([]);
	};
	const removeAllGroupFilters = (group: Group) => {
		setFilters((currentFilters) =>
			currentFilters.filter((filter) => !(filter.group === group))
		);
	};

	const toggleFilter = (name: string | number, group: Group, fnc: Function) => {
		if (group === Group.COLOR) {
			if (filterExists(name, group)) {
				return;
			}
			removeAllGroupFilters(group);
		}

		if (group !== Group.COLOR) {
			if (filterExists(name, group)) {
				removeFilter.apply(null, [name, group]);
				return;
			}
		}

		addFilter.apply(null, [name, group, fnc]);
	};

	const isShownByOwned = (nft: any, filters: Filter[]) => {
		const ownedFilters = filters.filter(
			(filter) => filter.group === Group.OWNED
		);
		if (!ownedFilters.length) return true;
		return ownedFilters.some((filter) => filter.fnc(nft));
	};
	const isShownByColor = (nft: any, filters: Filter[]) => {
		const ownedFilters = filters.filter(
			(filter) => filter.group === Group.COLOR
		);
		if (!ownedFilters.length) return true;
		return ownedFilters.some((filter) => filter.fnc(nft));
	};

	const applyFilters = () => {
		if (!filters.length) {
			setFiltered(data);
			return;
		}
		const filteredData = data.filter((instance) => {
			return isShownByOwned(instance, filters);
		});
		setFiltered(filteredData);
	};

	return {
		applyFilters,
		filters,
		toggleFilter,
		resetFilters,
		filterExists,
		filtered,
	};
};

export default useFilter;

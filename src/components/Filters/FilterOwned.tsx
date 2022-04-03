import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { Group } from '../../hooks/useFilter';
import { INft } from '../../redux/types';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';

interface IFilterOwned {
	filterExists: any;
	toggleFilter: Function;
	filters: any[];
}

const FilterOwned = ({ filterExists, toggleFilter, filters }: IFilterOwned) => {
	const [enabled, setEnabled] = useState(false);
	const { account } = useWalletConnect();

	useEffect(() => {
		if (!filters.length) setEnabled(false);
	}, [filters]);

	return (
		<>
			<p>Show Owned</p>
			<Switch
				disabled={!account}
				checked={filterExists(account, Group.OWNED)}
				onChange={() => {
					setEnabled(!enabled);
					toggleFilter(
						account,
						Group.OWNED,
						(nft: INft) => nft.owner === account
					);
				}}
				className={`${
					enabled ? 'bg-purple-600/80' : 'bg-gray-200'
				} relative inline-flex items-center h-6 rounded-full w-11 text-indigo-900`}>
				<span
					className={`${
						enabled ? 'translate-x-6' : 'translate-x-1'
					} inline-block w-4 h-4 transform bg-white rounded-full`}
				/>
			</Switch>
		</>
	);
};

export default FilterOwned;

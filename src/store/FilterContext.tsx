import { createContext } from 'react';
import { useSelector } from 'react-redux';
import { selectNfts } from 'redux/nfts/nfts';

import useFilter, { IFiltered } from 'hooks/useFilter';

export interface IFilterCtx {
	data: any[];
	filtered: IFiltered;
}
interface IProvider {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const FilterCtx = createContext<Partial<IFilterCtx>>({});

const FilterContext = ({ children }: IProvider) => {
	const { nfts: data } = useSelector(selectNfts);

	const filter = useFilter(data);
	console.log('adasdadsa');

	return (
		<FilterCtx.Provider value={{ data, filtered: filter }}>
			{children}
		</FilterCtx.Provider>
	);
};

export default FilterContext;

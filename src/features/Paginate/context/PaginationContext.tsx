import { createContext, useContext } from 'react';
import { FilterCtx, IFilterCtx } from '../../Filter/context/FilterContext';
import usePagination from 'features/Paginate/hooks/usePagination';

import { IPaginated } from 'types';

interface IPaginationCtx extends IFilterCtx {
	pagination: IPaginated;
}

interface IProvider {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const PaginationCtx = createContext<Partial<IPaginationCtx>>({});

const PaginationContext = ({ children }: IProvider) => {
	const fltCtx = useContext(FilterCtx);
	const { filtered } = fltCtx;

	const pagination = usePagination({
		data: filtered!.filtered!,
		itemsPerPage: 6,
		pageLimit: 3,
	});

	return (
		<PaginationCtx.Provider value={{ pagination: pagination, ...fltCtx }}>
			{children}
		</PaginationCtx.Provider>
	);
};

export default PaginationContext;

import { createContext } from 'react';

interface IContextProps {}

interface IContextProvider {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const Context = createContext<Partial<IContextProps>>({});

const ContextProvider = ({ children }: IContextProvider) => {
	return <Context.Provider value>{children}</Context.Provider>;
};

export default ContextProvider;

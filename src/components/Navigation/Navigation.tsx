import React from 'react';
import { useDispatch } from 'react-redux';
import useAsyncEffect from 'use-async-effect';
import { getNfts } from '../../redux/nfts/nfts';
import { fetchAllNfts } from '../../services/web3/utils';
import useAutoWalletConnect from '../../services/web3/wallet/useAutoConnect';
import Header from './Header';

// app layout interface
interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Navigation = ({ children }: ILayout) => {
	const dispatch = useDispatch();
	useAutoWalletConnect();

	useAsyncEffect(() => {
		dispatch(getNfts());
		fetchAllNfts();
	}, [dispatch]);

	return (
		<main className='mainStyle'>
			<Header />
			{children}
		</main>
	);
};

export default Navigation;

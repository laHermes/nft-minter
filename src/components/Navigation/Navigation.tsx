import React from 'react';
import { useDispatch } from 'react-redux';
import useAsyncEffect from 'use-async-effect';
import { getNftMetadata, getAllNfts } from '../../redux/nfts/nfts';
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
		dispatch(getNftMetadata());
		dispatch(getAllNfts());
	}, [dispatch]);

	return (
		<main className='mainStyle'>
			<Header />
			{children}
		</main>
	);
};

export default Navigation;

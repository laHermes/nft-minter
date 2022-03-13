import React from 'react';
import { useDispatch } from 'react-redux';
import useAsyncEffect from 'use-async-effect';
import { useWeb3React } from '@web3-react/core';
import { getNfts } from '../../redux/nfts/nfts';
import useAutoWalletConnect from '../../services/web3/wallet/useAutoConnect';
import Header from './Header';

//import notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// app layout interface
interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Navigation = ({ children }: ILayout) => {
	const dispatch = useDispatch();
	const { library } = useWeb3React();

	useAutoWalletConnect();

	useAsyncEffect(async () => {
		dispatch(getNfts());
		if (!library) return;
		library.on('block', async () => {
			dispatch(getNfts());
		});
		return () => library.removeListeners('block');
	}, [dispatch, library]);

	return (
		<main className='navigationStyle'>
			<Header />
			<ToastContainer limit={3} />
			{children}
		</main>
	);
};

export default Navigation;

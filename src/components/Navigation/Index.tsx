import React from 'react';
import { useDispatch } from 'react-redux';
import useAsyncEffect from 'use-async-effect';
import { useWeb3React } from '@web3-react/core';
import { getNfts } from '../../redux/nfts/nfts';
import useAutoWalletConnect from '../../services/web3/wallet/useAutoConnect';

//import notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

// app layout interface
interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Index = ({ children }: ILayout) => {
	const dispatch = useDispatch();
	const { library } = useWeb3React();

	useAutoWalletConnect();

	useAsyncEffect(async () => {
		//dispatch event to fetch nfts from blockchain
		dispatch(getNfts());
		if (!library) return;
		// on every block minted fetch nfts
		library.on('block', async () => {
			dispatch(getNfts());
		});
		return () => library.removeListeners('block');
	}, [dispatch, library]);

	return (
		<main className='navigationStyle'>
			<header>
				<HeaderPrimary />
				<HeaderSecondary />
			</header>
			<ToastContainer limit={3} />
			{children}
		</main>
	);
};

export default Index;

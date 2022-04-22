import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
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
	const isMounted = useRef(true);

	useAutoWalletConnect();
	useEffect(() => {
		dispatch(getNfts());
	}, [dispatch]);

	useEffect(() => {
		//dispatch event to fetch nfts from blockchain
		if (!isMounted.current) return;
		if (!library) return;
		// on every block minted fetch nfts
		library.on('block', async () => {
			dispatch(getNfts());
		});
		return () => {
			library.removeListeners('block');
			isMounted.current = false;
		};
	}, [dispatch, library]);

	return (
		<main className='navigationStyle'>
			<header className='pt-5 max-w-screen-lg mx-auto'>
				<HeaderPrimary />
			</header>
			<ToastContainer limit={3} />
			{children}
		</main>
	);
};

export default Index;

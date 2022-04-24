import React, { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { getNfts } from 'redux/nfts/nfts';

// web3
import { useWeb3React } from '@web3-react/core';
import useAutoWalletConnect from '@services/web3/wallet/useAutoConnect';

// notifications
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// components
import Navigation from './Navigation';

interface ILayout {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

// NAVIGATION COMPONENT WRAPS ALL ROUTES
const Index = ({ children }: ILayout) => {
	const dispatch = useDispatch();
	// const { library } = useWeb3React();

	useAutoWalletConnect();
	useEffect(() => {
		dispatch(getNfts());
	}, [dispatch]);

	// useEffect(() => {
	// 	//dispatch event to fetch nfts from blockchain
	// 	if (!library) return;

	// 	// on every block minted fetch nfts
	// 	library.on('block', async () => {
	// 		dispatch(getNfts());
	// 	});
	// 	// return () => library.removeListeners('block');
	// }, [dispatch, library]);

	return (
		<main className='navigationStyle'>
			<header className='pt-5 max-w-screen-lg mx-auto'>
				<Navigation />
			</header>
			<ToastContainer limit={3} />
			{children}
		</main>
	);
};

export default Index;

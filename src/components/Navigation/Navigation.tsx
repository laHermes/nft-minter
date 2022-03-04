import React from 'react';
import { useDispatch } from 'react-redux';
import useAsyncEffect from 'use-async-effect';
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
	useAutoWalletConnect();

	useAsyncEffect(() => {
		dispatch(getNfts());
		const interval = setInterval(() => {
			dispatch(getNfts());
		}, 8000);

		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<main className='mainStyle'>
			<Header />
			<ToastContainer limit={3} />

			{children}
		</main>
	);
};

export default Navigation;

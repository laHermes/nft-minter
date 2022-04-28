import { useEffect } from 'react';

//hooks
import useAutoWalletConnect from 'features/connect/hooks/useAutoConnect';
import { getNfts } from 'redux/nfts/nfts';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';

const useFetch = () => {
	const dispatch = useDispatch();

	const { library } = useWeb3React();

	useAutoWalletConnect();

	useEffect(() => {
		dispatch(getNfts());
	}, [dispatch]);

	useEffect(() => {
		//dispatch event to fetch nfts from blockchain
		if (!library) return;

		// on every block minted fetch nfts
		library.on('block', async () => {
			dispatch(getNfts());
		});
	}, [dispatch, library]);
};

export default useFetch;

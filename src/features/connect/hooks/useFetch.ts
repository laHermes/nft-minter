import { useEffect } from 'react';

//hooks & selectors
import { getNfts } from 'redux/nfts/nfts';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import useWalletConnect from './useWalletConnect';
import { EthNetworks } from 'services/web3/types';

const useFetch = () => {
	const dispatch = useDispatch();
	const { library } = useWeb3React();
	const { account, chainId } = useWalletConnect();
	// useEffect(() => {
	// 	if (!account || !chainId) return;
	// 	if (!(chainId in EthNetworks)) return;
	// 	dispatch(getNfts());
	// }, [dispatch, account, chainId]);

	//dispatch event to fetch nfts from blockchain
	// on every block minted fetch nfts
	useEffect(() => {
		if (!account || !chainId || !library) return;
		if (!(chainId in EthNetworks)) return;
		dispatch(getNfts());

		library.on('block', async () => {
			dispatch(getNfts());
		});
	}, [dispatch, library, account, chainId]);
};

export default useFetch;

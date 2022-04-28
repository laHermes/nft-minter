import { useEffect, useState } from 'react';

//hooks
import { getNfts } from 'redux/nfts/nfts';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';

const useFetch = () => {
	const [triedFetching, setTriedFetching] = useState<boolean>(false);

	const dispatch = useDispatch();
	const { library } = useWeb3React();

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

	return { triedFetching };
};

export default useFetch;

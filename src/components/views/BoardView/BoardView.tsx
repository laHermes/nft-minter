import React from 'react';
import NftsTable from '../../NftsTable/NftsTable';
import { useSelector } from 'react-redux';
import { selectNfts } from '../../../redux/nfts/nfts';

const Board = () => {
	const { nfts } = useSelector(selectNfts);

	return (
		<div className='max-w-screen-lg mx-auto p-5'>
			<NftsTable data={nfts} />
		</div>
	);
};

export default Board;

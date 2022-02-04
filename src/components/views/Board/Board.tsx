import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNfts } from '../../../redux/nfts/nfts';

const Board = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNfts());
	}, [dispatch]);

	return (
		<>
			<div className='bg-red-400 h-full w-full p-5'>asdas</div>
		</>
	);
};

export default Board;

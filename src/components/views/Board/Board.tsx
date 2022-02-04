import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getNfts, nftState } from '../../../redux/nfts/nfts';
import { create, CID } from 'ipfs-http-client';

const getIpfsImageUrl = (id: number, extension: string = '.png') => {
	const hash = 'Qma8NKXGJCtXmkK9jZGVKb9xN1NgsvUfYWdCdRwemsWfTk';
	const url = `https://ipfs.infura.io/ipfs/`;

	return `${url + hash + '/' + id + extension}`;
};

const Board = () => {
	const dispatch = useDispatch();
	const { nfts, status } = useSelector(nftState);

	useEffect(() => {
		dispatch(getNfts());
	}, [dispatch]);

	const cardStyle = 'bg-gray-900 w-64 h-64 text-white';

	return (
		<div className='p-5'>
			<div>
				{status === 'loading' && <p>Loading</p>}
				{status === 'failed' && <p>Failed fetching NFT data from IPFS</p>}
				<div className='flex flex-row py-2'>
					<button className='border p-2'>Click Me</button>
				</div>
			</div>
			<div className='grid gap-4 justify-between auto-cols-max grid-cols-5 w-full'>
				{nfts.map((nft) => {
					return (
						<div className={cardStyle} key={nft.dna}>
							<img src={getIpfsImageUrl(nft.edition)} alt='nftImage' />
							<p>{nft.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Board;

import React from 'react';
import useWalletConnect from '../../../services/web3/wallet/useWalletConnect';
import { MintCard } from '../../Minting/MintCardHeading/styles';
import { MintControl } from '../../Minting/MintControl/styles';
import Benefit from '../../Benefit/Index';
import useMinter from '../../../hooks/useMinter';
import {
	CountToMint,
	DecrementButton,
	IncrementButton,
	MintButton,
} from '../../Minting/MintControl/styles';

const benefits = [
	{
		title: 'No False Promises',
		description: 'No : DAO, Roadmap, Exclusive Access, Perks or Social Media',
		symbol: '🐑',
	},
	{
		title: 'Testnet',
		description:
			'Minting on Polygon Mumbai testnet so you do not have to waste any of you hard earned money! ',
		symbol: '🧪',
	},
	{
		title: 'All Yours',
		description: 'When you mint it, its all yours!',
		symbol: '🎉',
	},
];

const Mint = () => {
	const { chainId } = useWalletConnect();
	const { count, increment, decrement, mint } = useMinter();

	return (
		<div className='flex flex-col gap-4 max-w-md mx-auto p-5'>
			{chainId !== 80001 ? (
				<div className='border border-red-500/40 p-4 bg-gradient-to-r from-transparent to-red-500/40 rounded-[12px] text-red-500 font-semibold'>
					<p>This app is supported only on the Polygon Mumbai Testnet!</p>
				</div>
			) : (
				<>
					<MintCard>
						{benefits.map(({ title, description, symbol }) => (
							<Benefit
								key={title}
								title={title}
								description={description}
								symbol={symbol}
							/>
						))}

						{/* <MintCard.ImageHolder url={NFTImage} />
			<MintCard.Heading>
				<MintCard.Title>{nftInfo.title.toLowerCase()}</MintCard.Title>
				<PricePill price={nftInfo.price} logoUrl={polygonLogo} />
			</MintCard.Heading>
			<MintCard.Description>
				there are 10 images of a mesh that are assigned randomly to an nft when
				minted.
			</MintCard.Description>
			<MintCard.Description>
				each time you can mint up to 10 nfts.
			</MintCard.Description> */}
					</MintCard>
					<MintControl>
						<DecrementButton onClick={decrement} />
						<CountToMint count={count} />
						<IncrementButton onClick={increment} />
					</MintControl>
					<MintButton onClick={mint}>Mint</MintButton>
				</>
			)}
		</div>
	);
};

export default Mint;

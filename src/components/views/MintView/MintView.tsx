import React from 'react';

// hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';
import useMinter from 'hooks/useMinter';

// components
import { MintCard } from 'components/Minting/MintCardHeading/styles';
import { MintControl } from 'components/Minting/MintControl/styles';

// styles
import {
	CountToMint,
	DecrementButton,
	IncrementButton,
	MintButton,
	ViewCollections,
} from '../../Minting/MintControl/styles';
import NFTImage from 'assets/nft.png';

// errors
import Error from './Error';
import Benefits from './Benefits';

const Mint = () => {
	const { chainId } = useWalletConnect();
	const { count, increment, decrement, mint } = useMinter();

	return (
		<div className='flex flex-col items-center gap-4 max-w-3xl mx-auto p-5 pt-12'>
			{!(window as any).ethereum ? (
				<Error message='Make sure you have Metamask Wallet installed' />
			) : chainId !== 80001 ? (
				<Error message='This app is supported only on the Polygon Mumbai Testnet' />
			) : (
				<>
					<div className='rounded-[12px] w-fit text-white bg-pill-grey py-1.5 px-3 text-sm text-center self-center'>
						<p>Polygon Mumbai</p>
					</div>
					<h2 className='text-white text-4xl font-bold'>Mint NFT</h2>

					<div className='grid grid-cols-2 gap-8 mt-12'>
						<div className='flex flex-col justify-between'>
							<MintCard.ImageHolder url={NFTImage} />
							<MintButton onClick={mint}>Mint</MintButton>
						</div>
						<div className='flex flex-col gap-6'>
							<Benefits />
							<ViewCollections onClick={mint}>View Collection</ViewCollections>
						</div>
						{/* <MintCard> */}
						{/* 
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
						{/* </MintCard> */}
					</div>
					{/* <MintControl>
						<DecrementButton onClick={decrement} />
						<CountToMint count={count} />
						<IncrementButton onClick={increment} />
					</MintControl>
					<MintButton onClick={mint}>Mint</MintButton> */}
				</>
			)}
		</div>
	);
};

export default Mint;

const withProperWeb3Connection = (Component: React.FC) => (props: any) => {
	const { chainId } = useWalletConnect();

	if (!(window as any).ethereum)
		return <Error message='Make sure you have Metamask Wallet installed' />;
	if (chainId !== 80001)
		return (
			<Error message='This app is supported only on the Polygon Mumbai Testnet' />
		);

	return <Component {...props} />;
};

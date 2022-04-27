import React from 'react';
import Link from 'components/Elements/Link/Link';

// hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';
import useMinter from 'features/mint/hooks/useMinter';

// components
import Benefits from 'components/Benefit/Benefits';
import ImageLoader from 'components/ImageLoader/ImageLoader';

import NFTImage from 'assets/nft.png';

// errors
import Error from 'components/Elements/Error/Error';
import { Button } from 'components/Elements/Button/Button';

const Main = () => {
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
						<span>Polygon Mumbai</span>
					</div>
					<h2 className='text-white text-4xl font-bold'>Mint NFT</h2>

					<div className='grid grid-cols-2 gap-8 mt-12'>
						<div className='flex flex-col justify-between gap-6'>
							<div className='h-72'>
								<ImageLoader src={NFTImage} />
							</div>
							<Button onClick={mint} variant='gradientBg' gradientBorder={true}>
								Mint
							</Button>
						</div>
						<div className='flex flex-col gap-6'>
							<Benefits />
							<Link variant='secondary' to='/collection'>
								View Collection
							</Link>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Main;

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

// const ComponentToBe = withProperWeb3Connection(Component)

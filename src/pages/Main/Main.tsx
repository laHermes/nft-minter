import React from 'react';
import Link from 'components/Elements/Link/Link';

// hooks
import useWalletConnect from 'features/connect/hooks/useWalletConnect';

// components
import Benefits from 'components/Benefit/Benefits';
import ImageLoader from 'components/ImageLoader/ImageLoader';
import MintImage from 'assets/mint.png';

// errors
import Error from 'components/Elements/Error/Error';

const Main = () => {
	return (
		<div className='flex flex-col items-center gap-4 max-w-3xl mx-auto p-5 pt-5 sm:pt-12'>
			<div className='rounded-[12px] w-fit text-white bg-pill-grey py-1.5 px-3 text-sm text-center self-center'>
				<span>AI generated</span>
			</div>
			<h2 className='text-white text-4xl font-bold'>AI NFT</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-8 mt-3 sm:mt-12'>
				<div className='flex flex-col justify-between gap-6'>
					<div className='h-72'>
						<ImageLoader src={MintImage} />
					</div>
					<Link to='/mint'>Go To Minter</Link>
				</div>
				<div className='flex flex-col gap-6'>
					<Benefits />
					<Link variant='secondary' to='/collection'>
						View Collection
					</Link>
				</div>
			</div>
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

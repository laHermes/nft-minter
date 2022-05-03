import React from 'react';
import Link from 'components/Elements/Link/Link';

// hooks
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import useMinter from 'features/mint/hooks/useMinter';

// components
import Benefits from 'components/Benefit/Benefits';
import ImageLoader from 'components/ImageLoader/ImageLoader';
import { NftDetails } from 'config/nft';
import NFTImage from 'assets/nft.png';
import MintImage from 'assets/mint.png';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';
// errors
import Error from 'components/Elements/Error/Error';
import { Button } from 'components/Elements/Button/Button';
import { MODAL_TYPES, useModalContext } from 'store/ModalContext';

const Main = () => {
	const { chainId } = useWalletConnect();
	const { count, increment, decrement, mint } = useMinter();
	const { showModal } = useModalContext();

	const showMintModal = () => showModal(MODAL_TYPES.MINT);
	return (
		<div className='flex flex-col items-center gap-4 max-w-3xl mx-auto p-5 pt-5 sm:pt-12'>
			{!(window as any).ethereum ? (
				<Error message='Make sure you have Metamask Wallet extension/app installed on your device' />
			) : chainId !== 80001 ? (
				<Error
					message={`This app is supported only on the ${NftDetails.NETWORK}`}
				/>
			) : null}
			<>
				<div className='rounded-[12px] w-fit text-white bg-pill-grey py-1.5 px-3 text-sm text-center self-center'>
					<span>AI generated</span>
				</div>
				<h2 className='text-white text-4xl font-bold'>AI NFT</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-24 sm:gap-8 mt-3 sm:mt-12'>
					<div className='flex flex-col justify-between gap-6'>
						<div className='h-72'>
							<ImageLoader src={MintImage} />
						</div>
						<div className='inline-flex items-center justify-between bg-default-primary/60 text-white font-bold rounded-[12px] overflow-hidden'>
							<Button className='px-3 py-3'>
								<MinusSmIcon className='w-5' />
							</Button>
							<p>1</p>
							<Button className='px-3 py-3'>
								<PlusSmIcon className='w-5' />
							</Button>
						</div>
						<span className='text-2xl text-white text-center'>40/100</span>
						<div>
							<Button onClick={showMintModal} variant='gradientBg'>
								Mint
							</Button>
							<p className='text-white/80 text-sm text-center'>
								max 10 nfts per transaction
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-6'>
						<Benefits />
						<Link variant='secondary' to='/collection'>
							View Collection
						</Link>
					</div>
				</div>
			</>
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

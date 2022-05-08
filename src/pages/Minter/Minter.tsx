import React from 'react';
import Link from 'components/Elements/Link/Link';

// hooks
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import useMinter from 'features/mint/hooks/useMinter';

// components
import ImageLoader from 'components/ImageLoader/ImageLoader';
import { NftDetails, nftInfo } from 'config/nft';
import MintImage from 'assets/mint.png';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

// errors
import Error from 'components/Elements/Error/Error';
import { Button } from 'components/Elements/Button/Button';
import { MODAL_TYPES, useModalContext } from 'store/ModalContext';
import { errorMessages } from 'config/errorMessages';
import { useMintContext } from 'features/mint/context/MintContext';

const Minter = () => {
	const { count, increment, decrement, mint } = useMintContext();
	const { showModal } = useModalContext();

	const showMintModal = () => showModal(MODAL_TYPES.MINT, { count, mint });
	return (
		<div className='flex flex-col items-center gap-4 max-w-lg w-full mx-auto p-5 sm:pt-12 '>
			<MinterWarning />
			<div className='p-5 bg-white/5 rounded-[12px]'>
				<h2 className='text-white text-4xl font-bold text-center'>AI NFT</h2>
				<div className='sm:gap-8 mt-3 sm:mt-12'>
					<div className='flex flex-col justify-between content-center gap-6'>
						<div>
							<ImageLoader src={MintImage} />
						</div>
						<div className='inline-flex items-center justify-between bg-default-primary/60 text-white font-bold rounded-[12px] overflow-hidden'>
							<Button onClick={decrement} className='px-3 py-3'>
								<MinusSmIcon className='w-5' />
							</Button>
							<p>{count}</p>
							<Button onClick={increment} className='px-3 py-3'>
								<PlusSmIcon className='w-5' />
							</Button>
						</div>

						<p className='text-center text-white font-semibold'>0.03 Matic</p>
						<div>
							<Button onClick={showMintModal} variant='gradientBg'>
								Mint
							</Button>
							<p className='text-white/40 text-sm text-center mt-2'>
								max 10 nfts per transaction
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Minter;

const MinterWarning: React.FC = () => {
	const { chainId } = useWalletConnect();

	if (!(window as any).ethereum) {
		return <Error message={errorMessages.noWallet} />;
	}
	if (chainId !== nftInfo.networkId) {
		return (
			<Error message={errorMessages.wrongNetwork + ' ' + NftDetails.NETWORK} />
		);
	}
	return null;
};

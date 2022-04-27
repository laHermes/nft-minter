import React, { useEffect, useState } from 'react';

//hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';
import useAutoWalletConnect from 'services/web3/wallet/useAutoConnect';
import { getNfts } from 'redux/nfts/nfts';
import { useDispatch } from 'react-redux';

// svgs
import polygonLogo from 'assets/polygon-logo-circle.png';
import meshLogo from 'assets/mesh-second-logo.png';

//components
import Links from './Links';
import WalletButton from 'features/connect/components/WalletButton';
import { Button } from 'components/Elements/Button/Button';
import { shortenString } from 'utils/pureFunctions';
import { EthNetworks } from 'services/web3/types';
import { ExclamationIcon } from '@heroicons/react/outline';
import { ToastContainer } from 'react-toastify';

const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	const { chainId, account } = useWalletConnect();
	const dispatch = useDispatch();

	// const { library } = useWeb3React();

	useAutoWalletConnect();
	useEffect(() => {
		dispatch(getNfts());
	}, [dispatch]);

	// useEffect(() => {
	// 	//dispatch event to fetch nfts from blockchain
	// 	if (!library) return;

	// 	// on every block minted fetch nfts
	// 	library.on('block', async () => {
	// 		dispatch(getNfts());
	// 	});
	// 	// return () => library.removeListeners('block');
	// }, [dispatch, library]);

	return (
		<header className='navigationStyle'>
			<div className='pt-5 max-w-screen-lg mx-auto'>
				<div className='headerTop'>
					<div className='inline-flex gap-12'>
						<img src={meshLogo} alt='mesh logo' className='h-12 inline' />
						<Links />
					</div>
					<div className='flex flex-row gap-2'>
						{/* Conditionally render network warning */}
						<Button>
							{!chainId || chainId !== EthNetworks.Mumbai ? (
								<ExclamationIcon className='text-yellow-400 h-6' />
							) : (
								<img alt='Network Icon' src={polygonLogo} className='h-6' />
							)}
						</Button>

						{/* Conditionally render account info or connect wallet */}
						{!account ? (
							<WalletButton title='Connect Wallet' />
						) : (
							<Button
								onClick={() => setOpen((state) => !state)}
								variant='primary'>
								{shortenString(account!)}
							</Button>
						)}
					</div>
				</div>
			</div>
			<ToastContainer limit={3} />
		</header>
	);
};

export default Header;

import React, { useEffect, useState } from 'react';

//hooks
import useWalletConnect from 'features/connect/hooks/useWalletConnect';
import useAutoWalletConnect from 'features/connect/hooks/useAutoConnect';
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
import { ToastContainer } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';
import NetworkStatus from './NetworkStatus';
import ConnectAccount from './ConnectAccount';
import useFetch from 'features/connect/hooks/useFetch';

const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	useAutoWalletConnect();
	useFetch();

	return (
		<header className='navigationStyle'>
			<div className='headerTop'>
				<div className='flex flex-row gap-6'>
					<img src={meshLogo} alt='mesh logo' className='h-12' />
					<Links />
				</div>
				<div className='flex flex-row gap-2'>
					<NetworkStatus />
					<ConnectAccount />
				</div>
			</div>
		</header>
	);
};

export default Header;

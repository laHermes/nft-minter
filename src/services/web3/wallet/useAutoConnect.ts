import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { getAutoLoginLS, setAutoLoginLS } from '../../../utils/localStorage';
import { injected } from './connectors';

export const useAutoWalletConnect = () => {
	const { activate, active } = useWeb3React();

	const [triedAutoConnect, setTriedAutoConnect] = useState<boolean>(false);

	useEffect(() => {
		if (!getAutoLoginLS()) return;
		injected.isAuthorized().then((isAuthorized: boolean) => {
			if (!isAuthorized) return;
			activate(injected, undefined, true)
				.then(async () => {
					setAutoLoginLS(true);
					setTriedAutoConnect(true);
				})
				.catch(() => console.log('Failed to auto connect'));
		});
	}, [activate]);

	useEffect(() => {
		if (!triedAutoConnect && active) {
			setTriedAutoConnect(true);
		}
	}, [active, triedAutoConnect]);

	return triedAutoConnect;
};

import { useEffect, useState } from 'react';

//hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

//icons
import { CheckCircleIcon, DuplicateIcon } from '@heroicons/react/outline';

const CopyButton = () => {
	const [isCopied, setIsCopied] = useState<Boolean>(false);
	const { account } = useWalletConnect();

	useEffect(() => {
		if (!isCopied) return;
		const listener = setTimeout(() => {
			setIsCopied(false);
		}, 1000);

		return () => {
			clearTimeout(listener);
		};
	}, [isCopied]);

	const copyHandler = () => {
		navigator.clipboard.writeText(account!).then(
			() => {
				setIsCopied(true);
			},
			() => {
				setIsCopied(false);
			}
		);
	};

	return isCopied ? (
		<button className='inline-flex gap-1 text-white/60 text-xs'>
			<CheckCircleIcon className='h-4 w-4' />
			Copied
		</button>
	) : (
		<button
			className='inline-flex gap-1 text-white/60 text-xs'
			onClick={copyHandler}>
			<DuplicateIcon className='h-4 w-4' />
			Copy Address
		</button>
	);
};

export default CopyButton;

import { useEffect, useState } from 'react';

//hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

//icons
import { CheckCircleIcon, DuplicateIcon } from '@heroicons/react/outline';

const buttonStyle = 'inline-flex gap-1 text-white/60 text-xs';
const iconStyle = 'h-4 w-4';

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
		<button className={buttonStyle}>
			<CheckCircleIcon className={iconStyle} />
			Copied
		</button>
	) : (
		<button className={buttonStyle} onClick={copyHandler}>
			<DuplicateIcon className={iconStyle} />
			Copy Address
		</button>
	);
};

export default CopyButton;

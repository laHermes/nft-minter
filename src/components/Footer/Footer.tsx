import React from 'react';
import { useSelector } from 'react-redux';
import { selectNfts } from 'redux/nfts/nfts';
import {
	contractExplorerLink,
	maticFaucet,
} from 'services/web3/contracts/ContractExports';

const Footer = () => {
	const { nfts: data } = useSelector(selectNfts);

	return (
		<div className='mt-auto px-5'>
			<div className='flex flex-row justify-between gap-6 text-white/60 max-w-2xl w-full mx-auto pt-5 pb-2'>
				<div className='flex flex-row gap-5'>
					<a target={'_blank'} rel='noreferrer' href={contractExplorerLink}>
						polyscan
					</a>

					<a target={'_blank'} rel='noreferrer' href={maticFaucet}>
						faucet
					</a>
					<p>github</p>
				</div>
				<div className='-mt-1'>
					<p className='text-sm'>Minted</p>
					<p className='text-white'>{!!data.length ? data.length : '?'}</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

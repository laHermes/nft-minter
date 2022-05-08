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
		<div className='max-w-5xl  w-full mt-auto mx-auto px-5 pb-2 flex flex-row justify-between gap-6 text-white/60'>
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
	);
};

export default Footer;

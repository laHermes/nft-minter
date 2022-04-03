import { IChildren } from '../../../types';

const NavigationPrimary = ({ children }: IChildren) => {
	return <div className='headerTop'>{children}</div>;
};

const LogoText = ({ children }: IChildren) => {
	return (
		<div className='inline-flex'>
			<span className='text-indigo-900 text-2xl font-black inter'>
				{children}
			</span>
		</div>
	);
};

const BlockchainInfo = ({ children }: IChildren) => {
	return (
		<div className='inline-flex'>
			<span className='text-indigo-900 text-2xl font-black inter'>
				{children}
			</span>
		</div>
	);
};

const BlockchainInfoCard = ({ children }: IChildren) => {
	return (
		<div className='backdrop-blur-sm  rounded-md px-2 py-1 bg-white/5'>
			<p className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-md'>
				{children}
			</p>
		</div>
	);
};

NavigationPrimary.LogoText = LogoText;

export { NavigationPrimary, BlockchainInfo, BlockchainInfoCard };

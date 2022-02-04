import { Contract, Provider } from 'ethcall';
import { getProvider } from '..';
import { store } from '../../../redux';

const NFT_ADDRESS = '';

const provider = store.dispatch(getProvider);

export const call = async () => {
	const ethcallProvider = new Provider();
	await ethcallProvider.init(provider);
	// const contract = new Contract(NFT_ADDRESS, )
};

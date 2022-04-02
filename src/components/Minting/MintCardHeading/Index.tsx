import React from 'react';
import MintCard from './MintCard';
import NFTImage from '../../../assets/nft.png';
import PricePill from './PricePill';
import polygonLogo from '../../../assets/polygon-matic-logo.svg';
import { nftInfo } from '../../../info/nft';

const Index = () => {
	return (
		<MintCard>
			<MintCard.ImageHolder url={NFTImage} />
			<MintCard.Heading>
				<MintCard.Title>{nftInfo.title}</MintCard.Title>
				<PricePill price={nftInfo.price} logoUrl={polygonLogo} />
			</MintCard.Heading>
		</MintCard>
	);
};

export default Index;

import React from 'react';
import MintCard from './MintCard';
import NFTImage from '../../assets/nft.png';
import PricePill from './PricePill';

const Index = () => {
	return (
		<MintCard>
			<MintCard.ImageHolder url={NFTImage} />
			<MintCard.Heading>
				<MintCard.Title>Lorem Ipsum</MintCard.Title>
				<PricePill price='0.3' />
			</MintCard.Heading>
			<MintCard.Description>Desc</MintCard.Description>
		</MintCard>
	);
};

export default Index;

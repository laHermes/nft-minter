import React from 'react';
import NFTImage from '../../../assets/nft.png';
import polygonLogo from '../../../assets/polygon-matic-logo.svg';
import { nftInfo } from '../../../info/nft';
import { MintCard, PricePill } from './styles';

const Index = () => {
	return (
		<MintCard>
			<MintCard.ImageHolder url={NFTImage} />
			<MintCard.Heading>
				<MintCard.Title>{nftInfo.title.toLowerCase()}</MintCard.Title>
				<PricePill price={nftInfo.price} logoUrl={polygonLogo} />
			</MintCard.Heading>
			<MintCard.Description>
				there are 10 images of a mesh that are assigned randomly to an nft when
				minted.
			</MintCard.Description>
			<MintCard.Description>
				each time you can mint up to 10 nfts.
			</MintCard.Description>
		</MintCard>
	);
};

export default Index;

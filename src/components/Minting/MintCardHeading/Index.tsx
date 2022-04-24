import React from 'react';
import NFTImage from 'assets/nft.png';
import polygonLogo from 'assets/polygon-logo-circle.png';
import { nftInfo } from 'info/nft';
import { MintCard } from './styles';
import Benefit from 'components/Benefit/Index';

const Index = () => {
	return (
		<MintCard>
			<Benefit
				title='No False Promises'
				description='No : DAO, Roadmap, Exclusive Access, Perks or Social Media'
				symbol='🐑'
			/>
			<Benefit
				title='Testnet'
				description='Minting on Polygon Mumbai testnet so you do not have to waste any of you hard earned money! '
				symbol='🧪'
			/>
			<Benefit
				title='All Yours'
				description='When you mint it, its all yours!'
				symbol='🎉'
			/>
			{/* <MintCard.ImageHolder url={NFTImage} />
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
			</MintCard.Description> */}
		</MintCard>
	);
};

export default Index;

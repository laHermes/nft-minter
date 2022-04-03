import React from 'react';
import { IDataFallback } from '../../types';
import DataFallback from './styles';

const Index = () => {
	return <DataFallback warningText='No NFTs found!' />;
};

export default Index;

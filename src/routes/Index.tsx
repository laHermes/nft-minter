import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// PAGES
import Board from '../components/views/BoardView/Index';
import Collections from 'components/views/MintView/MintView';
import Mint from 'components/views/MintView/MintView';
import Header from 'components/Header/Header';

const Index = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Board />} />
				<Route path='/mint' element={<Mint />} />
				<Route path='/collections' element={<Collections />} />
			</Routes>
		</Router>
	);
};

export default Index;

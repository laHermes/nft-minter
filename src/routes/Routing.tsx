import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from '../components/views/BoardView/BoardView';
import Navigation from '../components/Navigation/Navigation';
import Collections from '../components/views/MintView/MintView';
import Mint from '../components/views/MintView/MintView';

const Routing = () => {
	return (
		<Router>
			<Navigation>
				<Routes>
					<Route path='/' element={<Board />} />
					<Route path='/mint' element={<Mint />} />
					<Route path='/collections' element={<Collections />} />
				</Routes>
			</Navigation>
		</Router>
	);
};

export default Routing;

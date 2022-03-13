import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from '../components/views/Board/Board';
import Navigation from '../components/Navigation/Navigation';
import Collections from '../components/views/Mint/Mint';
import Mint from '../components/views/Mint/Mint';

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

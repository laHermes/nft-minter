import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from '../components/views/Board/Board';
import Navigation from '../components/Navigation/Navigation';
import Collections from '../components/views/Collections/Collections';
import Market from '../components/views/Market/Market';

const Routing = () => {
	return (
		<Router>
			<Navigation>
				<Routes>
					<Route path='/' element={<Board />} />
				</Routes>
				<Routes>
					<Route path='/collections' element={<Collections />} />
				</Routes>
				<Routes>
					<Route path='/market' element={<Market />} />
				</Routes>
			</Navigation>
		</Router>
	);
};

export default Routing;

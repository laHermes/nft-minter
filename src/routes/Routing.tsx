import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from '../components/Board/Index';
import Navigation from '../components/Navigation/Navigation';

const Routing = () => {
	return (
		<Router>
			<Navigation>
				<Routes>
					<Route path='/' element={<Board />} />
				</Routes>
			</Navigation>
		</Router>
	);
};

export default Routing;

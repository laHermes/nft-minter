import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from '../components/Board/Index';
import Header from '../components/Header/Index';
import NavBar from '../components/Header/NavBar';
import Layout from '../components/Layout';

const Routing = () => {
	return (
		<Router>
			<NavBar>
				<Routes>
					<Route path='/' element={<Board />} />
				</Routes>
			</NavBar>
		</Router>
	);
};

export default Routing;

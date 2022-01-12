import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from '../components/Board/Index';
import Header from '../components/Header/Index';
import Layout from '../components/Layout';

const Routing = () => {
	return (
		<Router>
			<Layout>
				<Header />
				<Routes>
					<Route path='/' element={<Board />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default Routing;
